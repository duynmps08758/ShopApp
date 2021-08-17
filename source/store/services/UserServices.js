import { apiJson } from '../../config/ApiConfig'
import ApiRoute from '../../config/ApiRoute'

export const loginService = (params) => {
    return apiJson.post(ApiRoute.LOGIN, params)
}
//
export const postSever = (params) => { 
    return apiJson.post(ApiRoute.CREATEANEWFORM, params)
}
// get khoi truyen params
// lam nhuu post