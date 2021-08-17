import axios from "axios"
import { getToken } from "../helpers/Storages"
import { currentEnv } from './ApiEnvironment'
import { get } from 'lodash'
import * as utilsAction from '../store/actions/UtilsActions'
import { initStore } from '../../App'

export const versionApp = `${currentEnv.name}-${currentEnv.version}`

export let apiJson = axios.create({
    baseURL: currentEnv.url,
    timeout: 30000,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

export let apiFormData = axios.create({
    baseURL: currentEnv.url,
    timeout: 30000,
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
    }
})

apiJson.interceptors.response.use((response) => {
    let status = get(response.data, "success", false)
    if (!status) {
        let message = get(response.data, "error", "OTHER_ERROR")
        initStore.dispatch(utilsAction.requestError(message))
    }
    initStore.dispatch(utilsAction.handleLoading(false))
    return response
}, (error) => {
    console.log("ERROR ", error);
    handleError(error)
    return Promise.reject(error)
})

apiFormData.interceptors.response.use((response) => {
    let status = get(response.data, "success", false)
    if (!status) {
        let message = get(response.data, "error", "OTHER_ERROR")
        initStore.dispatch(utilsAction.requestError(message))
    }
    initStore.dispatch(utilsAction.handleLoading(false))
    return response
}, (error) => {
    console.log("ERROR ", error);
    handleError(error)
    return Promise.reject(error)
})

function handleError(error) {
    initStore.dispatch(utilsAction.handleLoading(false))
    let status = get(error, "response.status", null)
    let message = get(error, "response.error", "OTHER_ERROR")
    if (status >= 500) {
        console.log("SERVER ERROR");
        initStore.dispatch(utilsAction.requestError('SEVER_ERROR'))
    } else {
        switch (status) {
            // case 400: {
            //     break
            // }
            case 401: case 426: {
                initStore.dispatch(utilsAction.requestError('UNAUTHORIZED'))
                initStore.dispatch(utilsAction.loginAgain(true))
                break
            }
            case 403: {
                initStore.dispatch(utilsAction.requestError('NOT_PERMISSION'))
                break
            }
            case 404: {
                initStore.dispatch(utilsAction.requestError('NOT_FOUND'))
                break
            }
            case 409: {
                initStore.dispatch(utilsAction.requestError(message))
                break
            }
            default: {
                initStore.dispatch(utilsAction.requestError('OTHER_ERROR'))
            }
        }
    }
}

export function setToken(token) {
    apiJson.defaults.headers.common["authorization"] = `Bearer ${token}`
    apiFormData.defaults.headers.common["authorization"] = `Bearer ${token}`
}

export function removeToken() {
    setToken("");
}

getToken().then(token => {
    console.log('Token: Bearer', token)
    setToken(token)
})