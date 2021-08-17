import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from 'react-native';


const { width, height } = Dimensions.get('screen')
const FormButtonCategory = ({ item, onClickItem }) => {
    _onPress = () => {
        let dataItem = {
            titles: item?.title,
            ids:item?.id,

        }
        if (onClickItem) {
            onClickItem({ data: dataItem })
        }

    }
    return (
        <View>
        <View style={styles.viewContainer} >
            <View style={styles.viewIcon} >
                <TouchableOpacity onPress={_onPress} >


                    <Image
                        style={[styles.icon]}
                        resizeMode='contain'
                        source={item?.icon}
                    />

                </TouchableOpacity>
            </View>
            <View style={styles.TitleContainer} >
            <View >
            <Text style={styles.title}>{item?.title}</Text>
            </View>
            </View>
        </View>
        </View>
    );
};

export default FormButtonCategory;

const styles = StyleSheet.create({
    viewContainer: {
        width: 62,
        height: 120,
        marginStart: 11,
        alignItems:'center',
        flexDirection:'column',
       
         
         


    },
    viewIcon: {
        width: 61,
        height: 61,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff'
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        color: '#126881',
        fontSize: 12,
        fontWeight: '700',
        lineHeight:15,
        width:60,
        // marginLeft:6
        fontFamily:'ZillaSlab-Medium'
    
    },
    TitleContainer:{
      width:62,
      alignItems:'center',
    },
  
});