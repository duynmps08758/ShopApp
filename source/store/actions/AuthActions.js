import { setToken } from '../../config/ApiConfig'
import { saveToken } from '../../helpers/Storages'
import { loginService } from '../services/AuthServices'
import Actions from './Actions'

export const loginRequest = () => {
    return {
        type: Actions.LOGIN_REQUEST,
    }
}

export const loginSuccess = (data) => {
    return {
        type: Actions.LOGIN_SUCCESS,
        data
    }
}

export const loginFailure = (error) => {
    return {
        type: Actions.LOGIN_FAILURE,
        error
    }
}

export function login(params, onSuccess) {
    //console.log('PARAMS LOGIN ===>', JSON.stringify(params))
    return (dispatch) => {
        console.log('VAO LOGIN ===>')
        dispatch(loginRequest())
        loginService(params)
            .then((data) => {
                console.log('RESPONSE SUCCESS ===>', JSON.stringify(data.data))
                if (data.data.success) {
                    setToken(data.data.data.accessToken.token)
                    saveToken(data.data.data.accessToken.token)
                    dispatch(loginSuccess(data.data))
                    onSuccess()
                } else {
                    dispatch(loginFailure(data.data))
                }
            })
            .catch((err) => {
                console.log('LOGIN FAILURE ===>', JSON.stringify(err))
                dispatch(loginFailure(err))
            })
    }
}