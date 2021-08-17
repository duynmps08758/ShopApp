import { combineReducers } from 'redux'
import { reducer as network } from 'react-native-offline'

import userReducer from './UserReducer'
import utilsReducer from './UtilsReducer'
import dataReducer from './DataReducer'

export const allReducers = combineReducers({
    network,
    user: userReducer,
    utils: utilsReducer,
    data: dataReducer
})