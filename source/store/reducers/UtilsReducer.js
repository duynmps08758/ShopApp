import Actions from '../actions/Actions'
import { getErrorString } from '../../helpers/Utils'

const initialState = {
    message: null,
    isError: false,
    isLoginAgain: false,
    isLoading: false,
    isSuccess: false,
}

const utilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.REQUEST_ERROR: {
            return {
                ...state,
                isError: true,
                message: getErrorString(action.message)
            }
        }
        case Actions.CLEAR_ERROR: {
            console.log("CLEAR");
            return {
                ...state,
                isError: false,
                message: null
            }
        }
        case Actions.LOGIN_AGAIN: {
            return {
                ...state,
                isLoginAgain: action.status
            }
        }
        case Actions.HANDLE_LOADING: {
            return {
                ...state,
                isLoading: action.status
            }
        }
        case Actions.REQUEST_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                message: getErrorString(action.message)
            }
        }
        case Actions.CLEAR_SUCCESS: {
            return {
                ...state,
                isSuccess: false,
                message: null
            }
        }
        default:
            return state
    }
}

export default utilsReducer