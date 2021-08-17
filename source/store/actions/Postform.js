
import { postSever } from '../services/UserServices'
import Actions from './Actions'

export const postRequest = () => {
    return {
        type: Actions.POST_REQUEST,
    }
}

export const postSuccess = (data) => {
    return {
        type: Actions.POST_SUCCESS,
        data
    }
}

export const postFailure = (error) => {
    return {
        type: Actions.POST_FAILURE,
        error
    }
}

export function postForm(params, onSuccess) {
    //console.log('PARAMS LOGIN ===>', JSON.stringify(params))
    return (dispatch) => {
        console.log('VAO POST ===>')
        dispatch(postRequest())
        postSever(params)
            .then((data) => {
                console.log('RESPONSE SUCCESS ===>', JSON.stringify(data.data))
                if (data.data) {
                    
                    dispatch(postSuccess(data.data))
                    onSuccess()
                } else {
                    dispatch(postFailure(data.data))
                }
            })
            .catch((err) => {
                // console.log('LOGIN FAILURE ===>', JSON.stringify(err))
                // dispatch(postFailure(err))
            })
    }
}