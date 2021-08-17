import { clearCart, getCart, saveCart,clearCartItem } from '../../components/local/local'
import { getDataService } from '../services/DataServices'
import Actions from './Actions'
export const setData = (data) => {
    return {
        type: Actions.SET_DATA,
        data
    }
}
export const getDataRequest = () => {
    return {
        type: Actions.GET_DATA_REQUEST,
    }
}

export const getDataSuccess = (incomes, positions, healthinsurances) => {
    return {
        type: Actions.GET_DATA_SUCCESS,
        incomes,
        positions,
        healthinsurances
    }
}

export const getDataFailure = (error) => {
    return {
        type: Actions.GET_DATA_FAILURE,
        error
    }
}

export function getData(onSuccess) {
    //console.log('PARAMS LOGIN ===>', JSON.stringify(params))
    return (dispatch) => {
        // console.log('VAO LOGIN ===>')
        dispatch(getDataRequest())
        getDataService()
            .then((data) => {
                console.log('GET DATA SUCCESS ===>', JSON.stringify(data.data[0].incomes))
                dispatch(getDataSuccess(data.data[0].incomes, data.data[0].positions, data.data[0].healthinsurances))
                // onsuccess de khong bi pug app
                if (onSuccess) {
                    onSuccess()
                }
            })
            .catch((err) => {
                console.log('GET DATA FAILURE ===>', JSON.stringify(err))
                // dispatch(loginFailure(err))
            })
    }
}

const getDataCarSuccesst = (data) => {
    return {
        type: Actions.GET_DATA_CART,
        data
    }
}

export function getDataCart() {
    let data = []
    return (dispatch) => {
        async function _getData() {
            let cart = await getCart()
            console.log('---------> trong action - get cart: ', JSON.stringify(cart))
            cart ? data = cart : data = []
            dispatch(getDataCarSuccesst(data))
        }
        _getData()
    }
}

const addProductToCart = (data) => {
    return {
        type: Actions.ADD_PRODUCT_TO_CART,
        data
    }
}

export const handleAddProductToCart = (params, onSuccess) => {
    let isNew = true
    let data = []
    console.log('----------------> sản phẩm add cart: ', JSON.stringify(params))
    return(dispatch) => {
        async function _addToCart() {
            let currentCart = await getCart()
            console.log('----------> data cart lay duoc: ', JSON.stringify(currentCart))
            if (currentCart) {
                data = currentCart
            }
            data.forEach(element => {
                if (element?.id) {
                    if (element.id == params.id && element.name == params.name) {
                        element.count += params.count
                        isNew = false
                    }
                } else {
                    if (element.name == params.name) {
                        element.count += params.count
                        isNew = false
                    }
                }
            });
            isNew && data.push(params)
            console.log('----------------> data cart sau cùng: ', JSON.stringify(data))
            await saveCart(data)
            onSuccess ? onSuccess() : null
            dispatch(addProductToCart(data))
        }
        _addToCart()

    }
} 
const deleteCard = (data) => {
    return {
        type: Actions.GET_DELETE_CART,
        data
    }
}

export function deleteSuccess() {
    let data = []
    return (dispatch) => {
        async function _delete() {
            let cart = await clearCart()
            cart ? data = cart : data = []
            dispatch(deleteCard(data))
        }
        _delete()
    }
}
export function deleteCardItem  (data) {
    return {
        type: Actions.GET_DELETE_ITEM,
        data
    }
}


// export function deleteSuccessItem(data) {
//    // let data = []
//    let cart =  getDataCart();
//             console.log(cart,"idenx");

//     return (dispatch) => {
//         // console.log("dataitemsss", data);
//         async function _delete() {
//             let index = findindex(cart,data)
//             if(index!==-1){
//                 cart.splice(index,1)
//             }
//            cart ? data = cart : data = []
//             dispatch(deleteCardItem(data))
//         }
//         _delete()
//     }
// }
