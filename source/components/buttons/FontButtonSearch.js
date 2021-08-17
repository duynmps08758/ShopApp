import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image,TextInput } from 'react-native';


const { width, height } = Dimensions.get('screen')
const FormButton = ({searchValue, SearchText,nextScreen ,...rest}) => {
    
    return (
        <View style={styles.searchContainer}>
          
            <TextInput
                onPressIn={nextScreen}
                value={searchValue}
                style={styles.inputText}
                placeholder={SearchText}
                placeholderTextColor="#ACBAC3"
                numberOfLines={1}
                {...rest}
            />
           
            <TouchableOpacity style={styles.buttonContainer} >
                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_1.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 51,
        height: 36,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
 
    icon: {
        position: 'absolute',
        width: 51,
        height: 37,

    },
    searchContainer: {
        width: '80%',
        height: 37,
        borderColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent:'space-between',
        flex: 1,
        // marginBottom: 31,
    
      },
      inputText:{
          flex:1,
        fontSize: 12,
        color: '#ACBAC3',
        marginLeft: 13, 
       
      }
});