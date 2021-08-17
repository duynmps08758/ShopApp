import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, ScrollView,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Stars from 'react-native-stars';
import { useDispatch } from 'react-redux';
import {saveCart} from "../../components/local/local"
import { handleAddProductToCart } from '../../store/actions/DataActions';
const { width, height } = Dimensions.get('screen')

const ProductScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const data = route?.params?.item ?? {}
    // console.log('====>', data?.icons)
    const [count, setCount] = useState(1);
    const [selectSize, setSelectSize] = useState('');
    const [selectColor, setSelectColor] = useState('');
    const [valueRaTing, setValueRaTing] = useState(data?.ratings)
    // console.log('====>', selectColor)
    // console.log('====>',selectSize)
    // console.log('====>',count)
    const selecSize = [
        { id: '0', size: 'S', color: '#FF809F' },
        { id: '1', size: 'M', color: '#FFA771' },
        { id: '2', size: 'L', color: '#C7DC5B' },
        { id: '3', size: 'XL', color: '#FED883' },
    ]
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.viewSize, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item?.size}</Text>
        </TouchableOpacity>
    );

    const renderItemSize = ({ item }) => {
        const backgroundColor = item.size === selectSize ? "#126881" : "#F6F6F7";
        const color = item.size === selectSize ? 'white' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSelectSize(item.size)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}

            />
        );
    };
    const Itemtwo = ({ onPress, backgroundColor, borderColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.circle, backgroundColor, borderColor]}>

        </TouchableOpacity>
    );
    const renderItemColor = ({ item }) => {
        const backgroundColor = item?.color
        const borderColor = item?.color === selectColor ? '#F6F6F7' : 'white';
        return (
            <Itemtwo
                item={item}
                backgroundColor={{ backgroundColor }}
                onPress={() => setSelectColor(item.color)}
                borderColor={{ borderColor }}
            />
        );
    };
    _showCart = () => {
        let dataCart = {
            name: data?.names,
            coin: data?.values,
            color: selectColor,
            size: selectSize,
            count: count,
            id: data?.ids,
            icon: data?.icons
            
        }
        
        // xu ly them carrt len backend api
        // luu du lie cart moi them len redux
        //
        dispatch(handleAddProductToCart(dataCart))
        // console.log("[depug] dataCard")
        // navigation.push("ShopPingCardScreen", { item: dataCart })

    }
 
 
    return (

        <View style={styles.viewContainer}>
            <View style={styles.viewHeader} >
                <ImageBackground
                    style={[styles.icon]}
                    resizeMode='cover'
                    source={{ uri: data?.icons }} >
                    <View style={styles.viewButton}>
                    <TouchableOpacity onPress={() => navigation.goBack()}  style={styles.btnBack}>
                        <Image
                            style={[styles.iconBack]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_back.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.push("ShopPingCardScreen")} style={styles.btnShop}>
                        <Image
                            style={[styles.iconBack]}
                            resizeMode='contain'
                            source={require('../../ascess/image/icon_ShoppingCart.png')} />
                    </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
            {/* <View style={styles.FooterView}> */}
                <ScrollView  >
                    <View style={styles.viewFooter} >

                        <View>
                            <View style={styles.viewItem}>
                                <View style={styles.viewData}>
                                    <View>
                                        <Text style={styles.textName}>{data?.names || ''}</Text>
                                        <View style={styles.viewStar}>
                                            <Stars
                                                default={valueRaTing}
                                                update={(val) => { setValueRaTing(val) }}
                                                spacing={2.5}
                                                starSize={12.9, 12}
                                                opacity={true}
                                                // display={1}

                                                // halfStar={require('../../ascess/image/icon_HaftStar.png')}
                                                count={5}
                                                fullStar={require('../../ascess/image/icon_RatingStar.png')}
                                                emptyStar={require('../../ascess/image/icon_EStar.png')}
                                                // half={true}

                                            />
                                            <Text style={styles.textRating}>{valueRaTing}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.textValue}>${data?.values || ''}</Text>
                                </View>

                                <View style={styles.viewFLSize}>
                                    <Text style={styles.textSize}>Size:</Text>
                                    <View >
                                        <FlatList data={selecSize}
                                            horizontal
                                            initialNumToRender={10}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={renderItemSize}
                                            keyExtractor={(item) => item.id}
                                            extraData={selectSize}

                                        />
                                    </View>
                                </View>
                                <View style={styles.viewFLSize}>
                                    <Text style={styles.textSize}>Choose a color :</Text>
                                    <View >
                                        <FlatList data={selecSize}
                                            horizontal
                                            initialNumToRender={10}
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={renderItemColor}
                                            keyExtractor={(item) => item.id}
                                            extraData={selectColor}

                                        />
                                    </View>
                                </View>

                                <View style={styles.viewQuality}>
                                    <Text style={styles.textSize}>Select Quality:</Text>
                                    <View style={styles.congTru}>
                                        <TouchableOpacity style={styles.btnTru}
                                            onPress={() => setCount(Math.max(0, count - 1))}
                                        >
                                            <Image
                                                style={[styles.iconLess]}
                                                resizeMode='cover'
                                                source={require('../../ascess/image/icon_LessButton.png')} />
                                        </TouchableOpacity>
                                        <View style={styles.viewCount}>
                                            <Text style={styles.textValueCout}>{count}</Text>
                                        </View >
                                        <TouchableOpacity style={styles.btnCong}
                                            onPress={() => { setCount(count + 1) }}>
                                            <Image
                                                style={[styles.iconLess]}
                                                resizeMode='cover'
                                                source={require('../../ascess/image/icon_Square.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.textSize}>Description</Text>
                                    <Text style={styles.textDecription} numberOfLines={3}>{data?.decriptions || ''}</Text>
                                </View>
                                <View style={styles.viewButtonAdd}>
                                    <TouchableOpacity style={styles.buttonAdd}  onPress={_showCart}>
                                        <Text style={styles.textAdd}>ADD TO CART</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>

                </ScrollView>
            {/* </View> */}
        </View>

    )
}

export default ProductScreen

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    viewHeader: {
        width:width,
        height:height/3
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // // marginTop: 11,

    },
    icon: {
        width:width,
        height:height/3
    },

    viewFooter: {
        backgroundColor: '#ffff',
        paddingRight: 31,
        paddingLeft: 31,
        paddingTop: 56,
        width:width,
        height:height/3*2
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    btnBack: {
        marginLeft: 29,
    },
    iconBack: {
        width: 35,
        height: 35,
    },
    btnShop: {
        marginRight: 29,
    },
    
    viewData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,

    },
    textName: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '500',
        color: '#57636F',
        fontStyle: 'normal',
        width: 160,
    },
    viewStar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    textRating: {
        marginLeft: 8
    },
    textValue: {
        fontSize: 30,
        lineHeight: 41,
        fontWeight: '600',
        color: '#57636F',
        fontStyle: 'normal',
        letterSpacing: 0.05,


    },
    textValueCout: {
        fontSize: 12,
        lineHeight: 15,
        color: '#57636F',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    textSize: {
        fontSize: 12,
        lineHeight: 25,
        color: '#7A8D9C',
        fontStyle: 'normal',
        fontWeight: '400',
        // marginRight:200
    },
    congTru: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnTru: {
        width: 30,
        height: 30,
        backgroundColor: '#F6F6F7',
        borderRadius: 1.5,
        marginRight: 6
    },
    btnCong: {
        width: 30,
        height: 30,
        backgroundColor: '#F6F6F7',
        borderRadius: 1.5,
        marginLeft: 6,
    },
    iconLess: {
        width: 30,
        height: 30
    },
    viewCount: {
        width: 63,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#F6F6F7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewQuality: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    viewSize: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#F6F6F7',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F6F6F7',
        marginLeft: 8
    },
    viewFLSize: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'space-between',
        marginBottom: 20
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 100 / 2,
        backgroundColor: "red",
        marginLeft: 6,
        borderWidth: 5,
        borderColor: 'white'

    },
    textDecription: {
        fontSize: 12,
        lineHeight: 25,
        color: '#7A8D9C',
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 22,
    },
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#126881',
        width: 290,
        height: 62,
        borderRadius: 50
    },
    viewButtonAdd: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textAdd: {
        color: '#fff'
    },
   



})