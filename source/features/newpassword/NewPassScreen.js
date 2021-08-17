import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import SignInScreen from '../login/SignInScreen'




export default NewPassScreen = ({navigation}) => {
    const [newPass, onChangeNewPass] = React.useState();
    const [conFirmPass, onChangeConFirmPass] = React.useState();


    _showHome = () => {
       
        navigation.push("SignInScreen")

    }
    return (
        <View style={style.container}>
            <View style={style.header}
            >
         
                <Text style={style.textStyleSign} >Set A New Password</Text>
                <Text style={style.textStyle}>Lorem ipsum dolor sit amet, consectetur adipidscing.</Text>
                <Text style={style.textStyle}>integer maxximus accumsan erat id fasilicis. </Text>
            </View>
            <View style={style.footer}>

                <View>
                    <TextInput
                        style={style.input}
                        onChangeText={onChangeNewPass}
                        placeholder="Nhap UserName"
                        value={newPass}

                    />

                    <TextInput
                        style={style.input}
                        onChangeText={onChangeConFirmPass}
                        placeholder="Nhap Password"
                        value={conFirmPass}

                    />






                </View>

                
                <TouchableOpacity
                    style={style.signinbutton}
                    onPress={_showHome}
                >
                    <Text style={style.textbuttonSign} >Sign In</Text>
                </TouchableOpacity>
               
                </View>
            </View>

        




    );

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',





    },
    textStyleSign: {
        fontSize: 30,
        top: 50,
        
        color: 'white'

    },
    textStyle: {
        top: 50,
        right: 2,
        color: 'white',
        marginTop: 10,




    },
    textStyleUp: {
        fontSize: 20,
        position: 'absolute',
        right: 20,
        top: 30,
        color: 'white'

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#7BCFE9',



    },
    footer: {
        flex: 3,
        alignItems: 'center',
    },
    input: {

        height: 62,
        width: 312,
        margin: 10,
        borderRadius: 25,
        backgroundColor: '#F6F6F7',
        paddingLeft: 10,
        top: 35
    },
    forgotbutton: {
        top: 35,
        left: 100
    },
    buttonText: {
        color: "#E6655C"

    },
    signinbutton: {
        alignItems: "center",
        backgroundColor: "#126881",
        padding: 20,
        borderRadius: 25,
        marginTop: 200,
        width: 312,
        height: 62,
        
    },
    textbuttonSign: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 56,
    },
    mediabutton: {
        alignItems: "center",
        height: 25,
        width: 175,
        top: 30,


    },
    googlebutton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#F6F6F7",
        paddingBottom: 25,
        borderRadius: 25,
        marginTop: 40,
        width: 312,
        height: 62,
        marginLeft: 12
    },
    textbuttongoogle: {
        color: '#515457',
        alignItems: 'center',
    },
    fbbutton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#1877F2",
        paddingBottom: 25,
        borderRadius: 25,
        marginTop: 20,
        width: 312,
        height: 62,
        marginLeft: 12
    },
    icon: {
        width: 30,
        height: 29,
        right: 100,
        top: 20





    },
  




})


