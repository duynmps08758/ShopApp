import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList} from 'react-native'

export default function CardTotal({dataState,navigation}) {
    _showTotal = (dataState) =>{
        var total = 0;
        if (dataState.cart.length > 0 ) {
            for (var i=0; i < dataState.cart.length; i++) {
                total += dataState.cart[i].coin*dataState.cart[i].count
            }
        }
        return total;
        

    }
    _showCart = () => {     
        var toTalCheckOut= _showTotal(dataState);
        let dataCart = {
            name: dataState?.name,
            coin: dataState?.coin,
            color: dataState?.color,
            size: dataState?.size,
            count: dataState?.count,
            icon: dataState?.icon

        }
      
        navigation.navigate("CheckOutScreen", { item: dataCart ,toTalCheck:toTalCheckOut})
        // console.log(toTalCheck,"ccc");

    }   
    return (
        <View style={style.footter}>
        <View style={style.textSub}>
            <Text style={{fontFamily:'Nunito',lineHeight:25}}>Subtotal</Text>
            <Text style={{ color: '#E4126B', fontSize: 25, bottom:4 }}>{_showTotal(dataState)}</Text>
        </View>
        <TouchableOpacity
            style={style.signinbutton}
             onPress={_showCart}

        >
            <Text style={style.textbuttonSign} >CHECK OUT</Text>
        </TouchableOpacity>
    </View>       
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    herder: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',

    },
    content: {
        flex: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#F6F6F7',
    },
    footter: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonImageBack: {
        width: 35,
        height: 35,
        borderRadius: 30
    },
    buttonImageSetting: {
        width: 20,
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 10




    },
    textheader: {
        flex: 1,
        marginLeft: 105,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 1,
        color: '#7A8D9C',
        fontFamily:'Quicksand',
        fontWeight:'bold'


    },
    signinbutton: {

        backgroundColor: "#126881",

        borderRadius: 50,
        // width: 310,

        height: 55,
        justifyContent: 'center',
        alignItems: 'center',






    },
    textbuttonSign: {
        color: 'white',
        height: 18,
        // width: 90,
        fontFamily:'Quicksand',
        // backgroundColor:'#fad'
    },
    textSub: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flex: 1
    },
    imgNull:{
        width:200,
        height:200,
        marginTop:50
    }

})
