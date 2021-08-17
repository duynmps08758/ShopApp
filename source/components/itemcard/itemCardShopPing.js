import React, { useState } from 'react'
import Swipeout from 'react-native-swipeout';
import CheckBox from '@react-native-community/checkbox';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default ItemCardShopping = ({ data,_DeleteItem }) => {
    // const { category} = props;
    const [count, setCount] = useState([data?.count]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [sumTotal, setSumTotal] = useState([data?.coin * data?.count])
    const sum = data?.coin * count
    // const {_DeleteItem} = props;

    // this.state = {   
    //     activeRowKey: null
    // }
  
    const swipeSetting = {
        autuClose: true,
        onClose: (secId, rowId, direction) => {

        },
        onOpen: (secId, rowId, direction) => {

        },
        right: [
            {
                onPress: () => {
                    // <removeProduct />
                    _DeleteItem(data);
                },
                text: 'Delete', type: 'delete'
            }
        ],
        // rowId: index,
        sectionId: 1,
    };
    
    console.log(data,"data");

    return (
        <Swipeout{...swipeSetting}>
            <View style={style.container}>
                <View style={style.product}>

                    <CheckBox style={style.buttonCheck}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <View style={{ borderRadius: 20 }}>
                        <Image
                            style={style.icon}
                            resizeMode='cover'
                            source={{ uri: data?.icon }}
                        />
                    </View>


                    <View style={style.textStyle}>
                        <Text style={style.textTitle}>{data?.name}</Text>
                        <Text style={style.textColor}>
                            Color:{data?.color}
                        </Text>
                        <Text style={style.textSize}>Size: {data?.size}</Text>
                        <Text style={style.textMoney}>
                            ${data?.coin}
                        </Text>
                        <View style={style.congTru}>
                            <TouchableOpacity style={style.btnTru}
                                onPress={() => setCount(Math.max(0, count - 1))}
                            >
                                <Image
                                    style={[style.iconLess]}
                                    resizeMode='cover'
                                    source={require('../../ascess/image/icon_LessButton.png')} />
                            </TouchableOpacity>
                            <View style={style.viewCount}>
                                <Text style={style.textValueCout}>{count}</Text>
                            </View >
                            <TouchableOpacity style={style.btnCong}
                                onPress={() => { setCount(count + 1) }}>
                                <Image
                                    style={[style.iconLess]}
                                    resizeMode='cover'
                                    source={require('../../ascess/image/icon_Square.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.btnDelete]}
                            resizeMode='contain'
                            source={require('../../ascess/image/Delete_button.png')}
                        />


                    </TouchableOpacity>

                </View >
                <View style={{ backgroundColor: '#ffffff', marginBottom: 20, paddingRight: 15, paddingLeft: 15 }}>
                    <View style={style.total}>
                        <Text style={style.textMoneyFT}>${sum}</Text>
                        <Text style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: 12, color: '#57636F' }} > Sub total:           </Text>

                    </View>
                </View>
            </View>
        </Swipeout>
    )


}

const style = StyleSheet.create({
    icon: {
        width: 114,
        height: 114,
        borderWidth: 2,
        marginTop: 18,
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        marginLeft: 10,



    },
    container: {
        // padding: 15,
        flexDirection: 'column',
        backgroundColor: '#F6F6F7'



    },
    product: {
        flexDirection: 'row',
        paddingBottom: 15,
        backgroundColor: '#ffffff',


    },
    textTitle: {
        fontWeight: 'bold',
        color: '#57636F',
        fontSize: 14,
        fontFamily: 'Zilla Slab'
    },
    textMoney: {
        fontSize: 18,
        color: '#126881',
    },
    textStyle: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 14
        // alignItems:'center'

    },
    buttonCheck: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        top: 60,
        marginLeft: 20,


    },
    textColor: {
        fontSize: 10,
        color: '#7A8D9C',
    },
    textSize: {
        fontSize: 10,
        color: '#7A8D9C',
    },
    btnDelete: {
        marginTop: 15,
        height: 20,
        width: 20,
        right: 3

    },

    btnTru: {
        width: 30,
        height: 30,
        backgroundColor: '#F6F6F7',
        // borderRadius: 1.5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20


    },
    btnCong: {
        width: 30,
        height: 30,
        backgroundColor: '#F6F6F7',
        // borderRadius: 1.5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

    },

    textValue: {
        fontSize: 25,
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 30,
        textAlign: 'center'

    },
    fbbutton: {

        height: 30,
        width: 30,

    },
    total: {
        paddingHorizontal: 1,
        alignItems: 'flex-end',
        borderTopColor: '#F6F6F7',
        borderTopWidth: 1,
        flexDirection: 'row-reverse',
        paddingTop: 5,
        paddingBottom: 8








    },
    textMoneyFT: {
        color: '#E4126B'
    },
    congTru: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconLess: {
        width: 30,
        height: 30
    },
    viewCount: {
        width: 40,
        height: 30,
        // borderRadius: 5,
        backgroundColor: '#F6F6F7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textValueCout: {
        fontSize: 12,
        lineHeight: 15,
        color: '#57636F',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },


})