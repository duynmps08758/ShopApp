import { apiJson } from '../../config/ApiConfig'
import ApiRoute from '../../config/ApiRoute'

export const getDataService = () => {
    return apiJson.get(ApiRoute.GET_FORM)
}

    