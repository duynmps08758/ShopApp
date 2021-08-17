import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ItemCategory = ({ item,onClickItem }) => {
    _onPress = () => {
        let dataItem = {
            names: item?.name,
            ids: item?.id,
        }


        if (onClickItem) {
            onClickItem({ data: dataItem })
        }

    }
    return (
        <View style={styles.Container} > 
        <View style={styles.viewContainer}>
            <TouchableOpacity onPress={_onPress} style={styles.viewImage} >
                <Image
                    style={[styles.icon]}
                    resizeMode='cover'
                    source={{ uri: item?.icon }} />
            </TouchableOpacity>
            <Text style={styles.textName}>{item?.name}</Text>
            <Text style={styles.textAmount}>{item?.amount} Items</Text>
        </View>
        </View>
    )
}

export default ItemCategory
const styles = StyleSheet.create({
    Container:{
     paddingLeft:10,
    },
    viewContainer: {
        width: 92,
        height: 122,
        backgroundColor: '#F6F6F7',
        alignItems: 'center',
        marginLeft: 20,

    },
    viewImage: {
        width: 90,
        height: 70.6,
        marginTop:1,
    },
    icon:{
        width: 90,
        height: 70.6,
    },
    textName:{
        color: '#126881',
        fontWeight: 'bold',
        lineHeight: 22,
        fontSize: 18,
        fontStyle: 'normal',
        fontFamily: 'Quicksand-Bold',
        marginTop:6,
    },
    textAmount:{
        color: '#126881',
        fontWeight:'normal',
        lineHeight: 15,
        fontSize: 12,
        fontStyle: 'normal',
        fontFamily: 'Quicksand-Bold',
        marginTop:3,
        
    },

});