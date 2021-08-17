import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native'
import Stars from 'react-native-stars';

const { width, height } = Dimensions.get('screen')
const ItemSearch = ({ item, onClickItem }) => {
    _onPress = () => {
        let dataItem = {
            names: item?.name,
            values: item?.value,
            icons: item?.icon,
            // decriptions: item?.decription,
            ids: item?.id,
            ratings:item?.rating
        }


        if (onClickItem) {
            onClickItem({ data: dataItem })
        }

    }
    const [valueRaTing, setValueRaTing] = useState(item?.rating)
    return (
        <View style={styles.viewContainer}>
            <View>
                <TouchableOpacity style={styles.buttonImage} onPress={_onPress}>
                    <Image style={[styles.icon]}
                        resizeMode='cover'
                        source={{ uri: item?.icon }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonShopping}>
                    <Image
                        style={[styles.iconLove]}
                        resizeMode='contain'
                        source={require('../../ascess/image/icon_Love.png')} />
                </TouchableOpacity>

            </View>
            <View style={styles.viewStar}>
                <View>
                    <Text style={styles.textName} numberOfLines={1}>{item?.name || ''}</Text>
                  
                    <View style={styles.viewStarRating}>
                    <Stars
                        default={valueRaTing}
                        update={(val) => { setValueRaTing(val) }}
                        spacing={2.5}
                        starSize={13, 9}
                        opacity={true}
                        disabled={true}
                        // halfStar={require('../../ascess/image/icon_HaftStar.png')}
                        count={5}
                        fullStar={require('../../ascess/image/icon_RatingStar.png')}
                        emptyStar={require('../../ascess/image/icon_EStar.png')}
                        // half={true}

                    />
                    <Text style={styles.textRating} >{valueRaTing}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.textValue} numberOfLines={1}>${item?.value || ''}</Text>
                </View>

            </View>
        </View>
    )
}

export default ItemSearch
const styles = StyleSheet.create({
    viewContainer: {
        borderWidth:1,
        height: 230,
        marginBottom: 12,
        marginLeft: 18,
        maxWidth:(width/2)-45,
        borderRadius: 25,
        borderColor:'#E4E4E4'
    },

    viewStar: {
    //   marginBottom:20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // alignItems: 'center',
        marginLeft:9,
        top:-5

    },
    viewStarRating:{
     flexDirection:'row',
     alignItems:'center'
    },

    textRating:{
     marginLeft:8.5
    },

    textValue: {
        width: 45,
        height: 25,
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '600',
        // marginRight:10

    },
    buttonShopping: {
        width: 22,
        height: 22,
        marginLeft:(width/2)-90,
        top: -30
    },
    iconLove: {
        width: 20,
        height: 20,
    },
    buttonImage: {
        // maxWidth:(width/2)-52,
        // height: 169,
        backgroundColor: '#E4E4E4',
        borderRadius: 25,
    },
    textName: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '500',
        color: '#7A8D9C',
        fontStyle: 'normal',
        width: 80,
        // marginBottom:6


    },
    icon: {
        width:(width/2)-48,
        height: 160,
        borderRadius: 25,

    },

});

