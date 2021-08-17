import React from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList} from 'react-native'

export default function CartEmpty({navigation}) {
    return (
        <View style={style.container}>
       
             <View style={{justifyContent:'center',alignItems:'center',paddingVertical:90}} >
               <Text style={{fontSize:15,fontWeight:'bold'}}> Giỏ hàng của bạn đang trống </Text>
               <Text style={{fontSize:13}}>Hãy khám phá các mặt hàng đa dạng của chúng tôi</Text>
               <Text style={{fontSize:13}}> để tìm cho mình lựa chọn phù hợp nhé </Text>
               <Image
                    style={style.imgNull}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_shopping_black.png')} />
                <TouchableOpacity style={{marginTop:50, backgroundColor:"#7A8D9C",height:40,width:200,justifyContent:'center',alignItems:'center'}}
                     onPress={() => navigation.replace("BottomTabs")}
                     >
    
                 <Text style={{justifyContent:'center',alignItems:'center',color:"white",}}>Tiếp tục mua hàng</Text>
                </TouchableOpacity>
        </View>
        
    
    
                   
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
