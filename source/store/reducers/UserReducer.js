import Actions from '../actions/Actions'

const initialState = {
    token: null,
}

const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case Actions.USER_LOGIN_REQUEST: {
            return { ...state }
        }
        case Actions.USER_LOGIN_SUCCESS: {
            return { ...state }
        }
        case Actions.USER_LOGIN_FAILURE: {
            return { ...state }
        }

        default:
            return state
    }
}

export default authReducer