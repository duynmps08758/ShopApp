import Actions from './Actions'

export const requestError = (message) => {
    return {
        type: Actions.REQUEST_ERROR,
        message
    }
}

export const clearError = () => {
    return {
        type: Actions.CLEAR_ERROR
    }
}

export const loginAgain = (status) => {
    return {
        type: Actions.LOGIN_AGAIN,
        status
    }
}

export const handleLoading = (status) => {
    return {
        type: Actions.HANDLE_LOADING,
        status
    }
}

export const requestSuccess = (message) => {
    return {
        type: Actions.REQUEST_SUCCESS,
        message
    }
}

export const clearSuccess = () => {
    return {
        type: Actions.CLEAR_SUCCESS
    }
}