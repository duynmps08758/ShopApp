import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import HomeScreen from '../home/HomeScreen';
import FGScreen from '../fgscreen/FGScreen'
import SignUpScreen from '../register/ReGisTer'
import EmailScreen from '../email/EmailSreens'
import CheckOutScreen from '../checkout/CheckOutScreen'
import NavBottomTabs from '../../helpers/AppNavigator'
import { ScrollView } from 'react-native-gesture-handler';

export default SignInScreen = ({ navigation }) => {
    const [userName, onChangeUserName] = React.useState();
    const [passWord, onChangeTextPassWord] = React.useState();
    _showHome = () => {

        navigation.push("BottomTabs")

    }
    _showFotGot = () => {

        navigation.push("EmailScreen")

    }
    _showRegister = () => {

        navigation.push("SignUpScreen")

    }

    return (
        <View style={style.container}>
            <View style={style.header}
            >
                <View style>
                    <TouchableOpacity

                        onPress={_showRegister}
                    >
                        <Text style={style.textStyleUp} >Sign Up</Text>

                    </TouchableOpacity>
                </View>
                <Text style={style.textStyleSign} >Sign In</Text>
                <Text style={style.textStyle}>Lorem ipsum dolor sit amet, consectetur adipidscing.</Text>
                <Text style={style.textStyle}>integer maxximus accumsan erat id fasilicis. </Text>
            </View>

            <View style={style.footer}>
                <ScrollView>
                    <View>
                        <TextInput
                            style={style.input}
                            onChangeText={onChangeUserName}
                            placeholder="Nhap UserName"
                            value={userName}

                        />

                        <TextInput
                            style={style.input}
                            onChangeText={onChangeTextPassWord}
                            placeholder="Nhap Password"
                            value={passWord}

                        />






                    </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                        style={style.forgotbutton}
                        onPress={_showFotGot}
                    >
                        <Text style={style.buttonText}>Fotgot Password</Text>
                    </TouchableOpacity>
                 <View style={style.viewButton}>
                    <TouchableOpacity
                        style={style.signinbutton}
                        onPress={_showHome}
                    >
                        <Text style={style.textbuttonSign} >Sign In</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={style.mediabutton}
                        onPress={() => { }}
                    >
                        <Text style={style.textbuttonmedia} >Or sign in with social media</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.googlebutton}
                        onPress={() => { }}
                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_google.png')} />
                        <Text style={style.textbuttongoogle} >Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_fabo.png')} />
                        <Text style={style.textbuttonfb} >Continue with Facebook</Text>

                    </TouchableOpacity>
                </View>
                </ScrollView>
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
        top: 30,
        justifyContent:'flex-end',
        color: 'white',
        fontFamily:'Zilla Slab'

    },
    textStyle: {
        top: 30,
        right: 2,
        color: 'white',
        marginTop: 10,




    },
    textStyleUp: {
        fontSize: 20,
        // position: 'absolute',
        // alignItems:'flex-end',
        marginLeft: 230,
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
        top: 40,
        left: 90
       
    },
    buttonText: {
        color: "#E6655C"

    },
    signinbutton: {
        alignItems: "center",
        backgroundColor: "#126881",
        padding: 20,
        borderRadius: 25,
        marginTop: 55,
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
        justifyContent:'center',
        height: 25,
        width: 255,

        top:20,
      
      
    
    


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
      
    },
    textbuttongoogle: {
        color: '#515457',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:4
       
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
   
    },
    icon: {
        width: 30,
        height: 29,
        right: 110,
        top: 25





    },
 
    textbuttonmedia: {
        alignItems:'center',
        justifyContent:'center',
        marginBottom:5
    },
    textbuttonfb:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
    }






})


