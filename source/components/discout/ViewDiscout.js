import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ImageBackground, Button } from 'react-native'

const { width, height } = Dimensions.get('screen')

const ViewDiscout = ({ detail ,onClickItem}) => {
    _onPress=()=>{
        let dataItem = {
          names: detail?.name,
          values:  detail?.promotion,
          icons: detail?.icon,
          ids:  detail?.id,
      }
    
    
      if (onClickItem) {
          onClickItem({ datas: dataItem })
      }
    
      }
    return (
        // <View style={styles.viewContainer}>
        <TouchableOpacity style={styles.viewContainer} onPress={_onPress}>
            <Image source={{ uri: detail?.icon }} style={[styles.icon]} resizeMode='cover' />
            <View style={styles.valueDiscout}>
                <View style={styles.labelView}>
                    <View style={styles.labelLeft} ><Text style={styles.textLabel}>{detail?.discout || ''}</Text></View>
                    <View style={styles.labelRight} />
                </View>
            </View>
            <View style={styles.viewBottonContainer}> 
                <Text numberOfLines={1} style={styles.textName}>{detail?.name || ''}</Text>
                <View style={styles.viewBottom}>
                    <Text style={styles.textPromotion}>${detail?.promotion || ''}</Text>
                    <Text style={styles.textValue}>${detail?.value || ''}</Text>
                    <TouchableOpacity>
                        <Image
                            style={[styles.iconLove]}
                            resizeMode='contain'
                            source={require('../../ascess/image/icon_Love.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        // </View>
    )
}

export default ViewDiscout

const styles = StyleSheet.create({
    viewContainer: {
        borderRadius: 10,
        backgroundColor: '#F6F6F7',
        width: 122.88,
        height: 173,
        marginLeft:11,
        marginBottom: 22,
        borderWidth: 1,
        borderColor: '#F6F6F7'

    },
    labelView: {
        position: 'absolute',
        backgroundColor: "transparent",
        width: 42,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',

    },
    labelLeft: {
        position: "absolute",
        backgroundColor: '#FBBA32',
        width: 42,
        height: 42,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },
    labelRight: {
        position: "absolute",
        bottom: 0,
        borderBottomWidth: 9,
        borderBottomColor: "transparent",
        borderLeftWidth: 21,
        borderLeftColor: '#FBBA32',
        borderRightWidth: 21,
        borderRightColor: '#FBBA32',
        borderBottomRightRadius: 2,
        borderBottomLeftRadius: 2,
    },
    textLabel: {
        marginLeft: 10,
        color: '#ffff',
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 15,

    },
    icon: {
        position: 'absolute',
        width: 120.88,
        height: 171,
        borderRadius: 10

    },
    iconLove: {
        width: 14.46,
        height: 12,
        // marginTop: 5,

    },
    valueDiscout: {
        marginLeft: 60,
    },
    textName: {
        fontSize: 12,
        lineHeight: 14,
        fontStyle: 'normal',
        color: '#57636F',
        marginLeft: 10,
        marginTop: 7,
        fontWeight:'500',
       fontFamily:'ZillaSlab-Medium'
    },
    textValue: {
        fontSize: 8,
        lineHeight: 11,
        fontStyle: 'normal',
        color: '#126881',
        textDecorationLine: 'line-through',
        fontWeight: "600",
        // marginTop: 5,
        marginRight: 30,
        fontFamily:'Nunito-Bold'
    },
    textPromotion: {
        fontSize: 14,
        lineHeight: 25,
        fontStyle: 'normal',
        color: '#7A8D9C',
        fontWeight: 'bold',
        // marginLeft: 12,
        marginRight: 8,
        fontWeight:'700',
      fontFamily:'Nunito-Bold'
    },
    viewBottonContainer:{
          marginTop:120,
        
    },

    viewBottom: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',

    }

});