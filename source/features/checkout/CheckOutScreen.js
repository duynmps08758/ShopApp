import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList, } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { BottomNavigation } from 'react-native-paper'
import ItemCardShopping from '../../components/itemcard/itemCardShopPing'
import ModalBottom from '../../components/modalbottom/ModalBottom'
import ModalBottomSucess from '../../components/modalbottom/ModalBottomSucess'



export default CheckOutScreen = ({ navigation, route }) => {
    //    console.log("asd",navigation)
    const dataitemcheck = route?.params?.item ?? {}
    // console.log("duy:dataitemcheck", dataitemcheck)
    const total = route?.params?.toTalCheck ?? null
    console.log("total", total);
    const [dataCart, setDataCart] = React.useState([
        { id: 'ddd0', name: 'duy', color: '1' },
        { id: 'ddd1', name: 'duy dddd', color: '1' },
        { id: 'ddd2', name: 'duy sccc', color: '1' },
        { id: 'ddd3', name: 'duy cxcd', color: '1' },
        { id: 'ddd4', name: 'duy wqsa', color: '1' },
    ])
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisibleSuccess, setModalVisibleSuccess] = React.useState(false);
    const express = 2

    // _renderItemCart = ({ item, index }) => (
    //     <ItemCardShopping data={item} />
    // )

    _handleClickModalBottom = () => {
        setModalVisible(false)
        setModalVisibleSuccess(true)
    }

    _handleClickModalBottomSuccess = () => {
        setModalVisibleSuccess(false)
        navigation.replace('BottomTabs')

    }

    return (

        <View style={style.container}>
            <View style={style.herder}>
                <TouchableOpacity
                    onPress={() => navigation.push("ShopPingCardScreen")}
                >

                    <Image
                        style={[style.buttonImageBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_back.png')} />
                </TouchableOpacity>

                <Text style={style.textheader}>
                    Payment
                    </Text>



            </View>
            <View style={style.content}>
                <ScrollView >
                    <View style={style.viewOne}>
                        <View style={style.textAddress}>


                            <Image
                                style={{ width: 20, height: 20,marginTop:8 }}
                                // style={[style.buttonImageSetting]}
                                resizeMode='contain'
                                source={require('../../ascess/image/ic_address.png')} />
                            <Text style={style.textAddress}>
                                Shipping Address
                            </Text>
                            <TouchableOpacity >
                                <Text style={{ color: '#7A8D9C', marginRight: 10,marginTop:8 }}>Edit</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={style.viewAddress}>
                            <Text style={{ fontSize: 23, paddingBottom: 8, marginTop: 4, color: '#57636F' }}> Kylie</Text>
                            <Text style={style.textStyle}>119/24 Le Van khuong street</Text>
                            <Text style={style.textStyle}>Hiep Thanh</Text>
                            <Text style={style.textStyle}>TPHCM</Text>
                            <Text style={style.textStyle}>00029999909092</Text>
                        </View>
                    </View>
                    <View style={style.viewTwo}>

                        <Image
                            style={style.icon}
                            resizeMode='contain'

                            source={{ uri: dataitemcheck?.icon }}
                        />

                        <View style={style.styleInfo}>
                            <Text style={{ color: '#57636F' }}>{dataitemcheck.name}</Text>
                            <Text style={{ color: '#7A8D9C' }}>Color: {dataitemcheck.color} | Size: {dataitemcheck.size}</Text>
                            <Text style={style.textMoneyFT}>${dataitemcheck.coin}</Text>
                        </View>
                        <View style={style.textAmount}>
                            <Text style={{ color: '#7A8D9C' }}>X{dataitemcheck.count}</Text>
                        </View>

                    </View>

                    <View style={style.viewService}>
                        <View style={style.viewTop}>
                            <Text style={{ color: '#57636F', marginBottom: 12 }}>Delivery Service</Text>
                            <TouchableOpacity >
                                <Text style={{ marginBottom: 12, color: '#7A8D9C' }}>Edit</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={style.viewBottom}>
                            <Text style={{ fontWeight: 'bold', marginTop: 8, color: '#57636F' }}>Express Delivery</Text>
                            <Text style={{ fontWeight: 'bold', marginTop: 8, color: '#57636F' }}>${express}</Text>
                        </View>

                    </View>
                    <View style={style.textDescription}>
                        <Text style={style.textAdd}>
                            Add Description
                        </Text>
                        <TextInput style={style.textCmt}>

                        </TextInput>
                    </View>
                    <View style={style.textPayment}>

                        <View style={style.viewBotPayMent}>
                            <View style={style.viewService}>
                                <View style={style.viewTop}>
                                    <Text style={{ top: 10, color: '#57636F' }}>Payment Method</Text>
                                    <TouchableOpacity
                                        style={style.buttonCheck}
                                        onPress={() => { }}

                                    >

                                        <Image
                                            style={[style.btnPayMentone]}
                                            resizeMode='contain'
                                            source={require('../../ascess/image/ic_mybay.png')} />

                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={style.buttonCheck}
                                        onPress={() => { }}

                                    >


                                        <Image
                                            style={[style.btnPayMent]}
                                            resizeMode='contain'
                                            source={require('../../ascess/image/ic_next.png')} />

                                    </TouchableOpacity>

                                </View>
                                <View style={style.viewBottomMyPay}>
                                    <Text style={{ marginTop: 10, color: '#7A8D9C' }}>Subtotals for products</Text>
                                    <Text style={{ marginTop: 10, color: '#7A8D9C' }}>${dataitemcheck.coin * dataitemcheck.count}</Text>
                                </View>
                                <View style={style.viewBottomMyPay}>
                                    <Text style={{ marginTop: 10, color: '#7A8D9C' }}>Subtotals for shipping</Text>
                                    <Text style={{ marginTop: 10, color: '#7A8D9C' }}>${express}</Text>
                                </View>
                                <View style={style.viewBottomMyPay}>
                                    <Text style={{ marginTop: 10, color: '#57636F' }}>Total Payment</Text>
    <Text style={{ marginTop: 10, color: '#57636F' }}>${dataitemcheck.coin * dataitemcheck.count+express}</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    <View style={style.textDrop}>

                    </View>
                </ScrollView>
            </View>
            <View style={style.footter}>
                <View style={style.textSub}>
                    <Text style={{ color: '#7A8D9C' ,fontWeight:'bold',fontFamily:"Nunito"}} >Total</Text>
                    <Text style={{ color: '#E4126B', fontSize: 25 }}>${total}</Text>
                </View>
                <TouchableOpacity
                    style={style.signinbutton}
                    onPress={() => setModalVisible(true)}

                >
                    <Text style={style.textbuttonSign} >BUY NOW</Text>

                </TouchableOpacity>
       
            </View>
            <ModalBottom handleAction={_handleClickModalBottom} isVisible={modalVisible} />
            <ModalBottomSucess handleAction={_handleClickModalBottomSuccess} isvisible={modalVisibleSuccess} />
        </View>
    );

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F6F6F7'
    },
    herder: {
        // flex: 1,
        height: 55,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',

    },
    content: {
        flex: 5,
        paddingTop: 8,
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
        marginTop: 10
    },
    buttonImageBack: {
        width: 35,
        height: 35,
        borderRadius: 30,
        marginLeft: 15
    },

    textheader: {
        marginLeft: 110,
        color: '#7A8D9C',
        fontFamily:'Quicksand',
        fontWeight:'bold'
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 1
        // alignItems: 'center'


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
        // width: 75,
    },
    textSub: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        flex: 2
    },
    textAddress: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        padding: 8,
        marginTop:7,
        color: '#57636F',
        // borderBottomColor:'#bdbdbd',
        // borderBottomWidth:0.2


    },
    viewAddress: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderTopColor: '#bdbdbd',
        borderTopWidth: 0.2,
        paddingLeft: 43,
        paddingRight: 15,
        justifyContent: 'space-between',


    },
    textService: {
        flex: 1,
        backgroundColor: '#ffff45'
    },
    textDescription: {
        flexDirection: 'column',
        flex: 2,
        padding: 15,
        backgroundColor: '#FFFFFF',
        marginTop: 8,
        paddingLeft: 23,
        paddingRight: 23




    },
    textPayment: {
        flex: 2,

    },
    textDrop: {
        flex: 1
    },
    viewTwo: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        padding: 15,
        paddingLeft: 22





    },
    icon: {
        height: 70,
        width: 70,
        backgroundColor: '#E4E4E4',
        paddingRight: 5

    },
    styleInfo: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    viewOne: {
        paddingBottom: 8,




    },
    textMoneyFT: {
        color: '#126881'
    },
    textAmount: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        paddingLeft: 10

    },
    viewService: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        padding: 15,
        paddingRight: 25,
        paddingLeft: 20,
        paddingBottom: 15
        // justifyContent:'center'


    },
    viewTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E4E4E4',
        borderBottomWidth: 1,




    },
    viewBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    textCmt: {
        maxWidth: '100%',
        height: 120,
        borderColor: '#E4E4E4',
        borderWidth: 1,
        borderRadius: 30,
        marginTop: 15



    },
    btnPayMent: {
        width: 30,
        height: 30,
        top: 6,
        marginRight: 3,


    },
    viewTopPayMent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnPayMentone: {
        // top: 2,
        width: 60,
        height: 60,
        bottom: 10,
        marginLeft: 85

    },
    total: {
        // paddingHorizontal: 1,

        alignItems: 'flex-end',
        borderTopColor: '#bdbdbd',
        borderTopWidth: 1,
        flexDirection: 'row'





    },
    viewBottomMyPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    textStyle: {
        paddingBottom: 4,
        paddingLeft: 5,
        color: '#57636F',
        fontFamily: 'Nunito',
      
    fontWeight: 'normal',
    fontSize: 12,

    }

})
