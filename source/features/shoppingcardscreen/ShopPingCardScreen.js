import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import ItemCardShopping from '../../components/itemcard/itemCardShopPing';
import { clearCart } from '../../components/local/local';
// import AsyncStorage from '@react-native-community/async-storage'
import   {NavBottomTabs} from '../../helpers/AppNavigator'
import { getDataCart } from '../../store/actions/DataActions';
import { deleteSuccess } from '../../store/actions/DataActions';
import { deleteCardItem } from '../../store/actions/DataActions';
import CartEmpty from '../../features/cardempty/CartEmpty'
import CartTotal from '../../features/carttotal/CardTotal'



export default ShopPingCardScreen = ({ navigation, route }) => {
    // _showCheckOut = () => {
    //     navigation.push("CheckOutScreen")
    // }
    
    
    const [totalSum,setTotalSum] = React.useState();
    const  dispatch = useDispatch();
    const dataitem = route?.params?.item ?? {};
    const dataState = useSelector(state => state.data);
    const [emptyCart, setEmptyCard] = React.useState();
    const [toTalCheck, setToTalCheck] = React.useState();
    
    useEffect(() => {
        dispatch(getDataCart())
        // get du lieu 
    }, [])
    useEffect(() => {
       
        
    }, [])
    _DeleteItem = (dataitem) =>{
        dispatch(deleteCardItem(dataitem))
       };
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

    }
    _Check =()=>{
        dispatch(deleteSuccess(dataitem))
     
       
      
    }
    _ShowItem=(dataState,navigation)=>{
        var result = <CartEmpty onPress={onPress} navigation={navigation}/>;
        if(dataState!==null){
            if(dataState.cart.length>0){
                result = dataState.cart.map((item, index)=>{
                    return(
    
                        <ItemCardShopping 
                        data={item}
                        _DeleteItem={_DeleteItem}
                        />
                    )
                });
            }
        }
        return result;

    }

    _showTotalCart=(dataState, navigation)=>{
        var result = null
        if(dataState.cart.length>0){
            result = <CartTotal navigation={navigation} dataState={dataState}/>
        }
        return result;
    }
    
//    if(dataState.cart.length === 0) return (<View style={style.container}>
//     <View style={style.herder}>
//         <TouchableOpacity style={{ marginLeft: 20 }}

//              onPress={() => navigation.replace("BottomTabs")} 


//         >

//             <Image
//                 style={[style.buttonImageBack]}
//                 resizeMode='contain'
//                 source={require('../../ascess/image/ic_back.png')} />
//         </TouchableOpacity>
//         <Text style={style.textheader}>
//             My Cart
//         </Text>
//         <TouchableOpacity onPress={_Check}>

//             <Image
//                 style={[style.buttonImageSetting]}
//                 resizeMode='contain'
//                 source={require('../../ascess/image/ic_popmenu.png')} />
//         </TouchableOpacity>
        

//     </View>
//          <View style={{justifyContent:'center',alignItems:'center',paddingVertical:90}} >
//            <Text style={{fontSize:15,fontWeight:'bold'}}> Giỏ hàng của bạn đang trống </Text>
//            <Text style={{fontSize:13}}>Hãy khám phá các mặt hàng đa dạng của chúng tôi</Text>
//            <Text style={{fontSize:13}}> để tìm cho mình lựa chọn phù hợp nhé </Text>
//            <Image
//                 style={style.imgNull}
//                 resizeMode='contain'
//                 source={require('../../ascess/image/icon_shopping_black.png')} />
//             <TouchableOpacity style={{marginTop:50, backgroundColor:"#7A8D9C",height:40,width:200,justifyContent:'center',alignItems:'center'}}

//                 onPress={() => navigation.replace("BottomTabs")} >

//              <Text style={{justifyContent:'center',alignItems:'center',color:"white",}}>Tiếp tục mua hàng</Text>
//             </TouchableOpacity>
//     </View>
    


               
// </View>)
    
    // const STORAGE_KEY = '@save_age'
    // const [save, setSave] = useState('')
        return (
        
                <View style={style.container}>
                    
                <View style={style.herder}>
                    <TouchableOpacity style={{ marginLeft: 20 }}

                         onPress={() => navigation.replace("BottomTabs")} 


                    >

                        <Image
                            style={[style.buttonImageBack]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_back.png')} />
                    </TouchableOpacity>
                    <Text style={style.textheader}>
                        My Cart
                    </Text>
                    <TouchableOpacity onPress={_Check}>

                        <Image
                            style={[style.buttonImageSetting]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_popmenu.png')} />
                    </TouchableOpacity>

                </View>
                
       
         
                <View style={style.content}>
                    {/* <ItemCardShopping data={dataitem} /> */}

            {/* <FlatList
                        data={dataState.cart}
                        _DeleteItem={_DeleteItem}
                        renderItem={({ item }) => <ItemCardShopping data={item} _DeleteItem={_DeleteItem}
                        />}
                        keyExtractor={item => `${item.id}`}
                        // ListHeaderComponent={() => (dataitem.length < 0? 
                        //     <Text style={styles.emptyMessageStyle}>The list is empty</Text>  
                        //     : null)
                        //   }
                    />  */}
                   {/* <ItemCardShopping data= {dataState.cart}  _DeleteItem={_DeleteItem}/>  */}
                 
                 {_ShowItem(dataState,navigation)}
                
                </View>
                {_showTotalCart(dataState,navigation)}
            </View>
            
        );

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
