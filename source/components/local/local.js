import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const saveCart = async (value) => {
    try {
        console.log('-----> chay vao save: ', JSON.stringify(value))
        await AsyncStorage.setItem(`@CART`, JSON.stringify(value))
        
        return true
    }
    catch (error) {
        return false
    }
}

export const clearCart = async () => {
// await saveCart(null) 
        
await AsyncStorage.removeItem('@CART');

}
export const clearCartItem = async (data) => {
    //await saveCart(null) 
    // var cartItem= getCart();
    // console.log(cartItem,"cart");
    //     var index = -1;
    //         if(cartItem.length>0){
    //             for(var i =0; i<cartItem.length;i++){
    //                 if(cartItem[i].id==data[i].id){
    //                         index= i;
    //                         break;
    //                 }
    //             }
    //         }
    //         return index;
    




    // await AsyncStorage.removeItem('@CART');
    
    }

export const getCart = async () => {
    try {
        
        const value = await AsyncStorage.getItem(`@CART`)
        if (value !== null) {
           
            return JSON.parse(value)
        }
        return null
    }
    catch (error) {
        return null
    }
}