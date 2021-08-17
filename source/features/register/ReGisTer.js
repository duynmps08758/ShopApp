import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import SignInScreen from '../login/SignInScreen'


export default SignUpScreen = ({navigation}) => {
    const [userName, onChangeUserName] = React.useState();
    const [passWord, onChangeTextPassWord] = React.useState();
    const [email, onChangeEmail] = React.useState();
    const [conFirmPassWord, onChangeConFirmPassWord] = React.useState();


    _showSignIn = () =>{
        navigation.push("SignInScreen")
    } 
    return (
        <View style={style.container}>
            
            <View style={style.header}
            >
                 <TouchableOpacity
              
              onPress={_showSignIn}
          >
              <Text style={style.textStyleUp} >Sign In</Text>
          </TouchableOpacity>
                <Text style={style.textStyleSign} >Sign Up</Text>
                <Text style={style.textStyle}>Lorem ipsum dolor sit amet, consectetur adipidscing.</Text>
                <Text style={style.textStyle}>integer maxximus accumsan erat id fasilicis. </Text>
            </View>
            <View style={style.footer}>
                <ScrollView>
                <View>
                    
                    <TextInput
                        style={style.input}
                        onChangeText={onChangeUserName}
                        placeholder="Your Name"
                        value={userName}

                    />
                    <TextInput
                        style={style.input}
                        onChangeText={onChangeEmail}
                        placeholder="Your Email"
                        value={email}

                    />

                    <TextInput
                        style={style.input}
                        onChangeText={onChangeTextPassWord}
                        placeholder="Your PassWord"
                        value={passWord}

                    />
                       <TextInput
                        style={style.input}
                        onChangeText={onChangeConFirmPassWord}
                        placeholder="Confirm PassWord"
                        value={conFirmPassWord}

                    />




                

                </View>

                {/* <TouchableOpacity
                    style={style.forgotbutton}
                    onPress={() => { }}
                >
                    <Text style={style.buttonText}>Fotgot PassWord?</Text>
                </TouchableOpacity> */}
                <View style={{alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity
                    style={style.signinbutton}
                    onPress={() => { }}
                >
                    <Text style={style.textbuttonSign} >Sign Up</Text>
                </TouchableOpacity>
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
                <View>
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
        
        color: 'white'

    },
    textStyle: {
        top: 30,
        right: 2,
        color: 'white',
        marginTop: 10,




    },
    textStyleUp: {
        fontSize: 20,
        marginLeft: 230,
        color: 'white',
        

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
        marginTop: 50,
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
        
    },
    textbuttongoogle: {
        color: '#515457',
        alignItems: 'center',
        marginBottom:5
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
    textbuttonfb:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
    }




})


