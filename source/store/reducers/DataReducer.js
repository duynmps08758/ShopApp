import Actions from '../actions/Actions'
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = 
{
    // incomes: [],
    // positions: [],
    // healthinsurances: [],
    cart: [],
}

const dataReducer = (state = initialState, action) => {
    var index = -1;
    var {data}= action;
    switch (action.type) {
        case Actions.GET_DATA_REQUEST: {
            return { ...state, incomes: [] }
        }
        case Actions.GET_DATA_SUCCESS: {
            // console.log('----> incomes:', JSON.stringify(action.incomes))
            return {
                ...state, incomes: action.incomes,
                positions: action.positions,
                healthinsurances: action.healthinsurances
            }
        }
        case Actions.GET_DATA_FAILURE: {
            return { ...state }
        }
    
        case Actions.GET_DATA_CART: {
            return { ...state, cart: action.data }
        }
        case Actions.ADD_PRODUCT_TO_CART: {
            return { ...state, cart: action.data }
        }
        case Actions.GET_DELETE_CART: {
            return { ...state, cart: action.data }
        }
        case Actions.GET_DELETE_ITEM:{
            index= findindex(state.cart,data);
            if(index!==-1){
                state.cart.splice(index,1);
            }
            AsyncStorage.setItem(`@CART`, JSON.stringify(state.cart))
            console.log(state,"datas");

            return {...state}
        }
        default:
            return state;
    }
}

const findindex=(cartItem,data)=>{
    var index = -1;
            if(cartItem.length>0){
                for(var i =0; i<cartItem.length;i++){
                    if(cartItem[i].id == data.id){
                            index= i;
                            break;
                    }
                }
            }
            return index;
}

export default dataReducer