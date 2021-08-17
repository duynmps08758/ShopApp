import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import FGScreen from '../fgscreen/FGScreen'



export default EmailScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState();
   
_showForgotOTP = () =>{
    Alert.alert(null, " This code will expire on 5 minutes",
    [
    // { text: 'Không', onPress: () => { }, style: 'default' },
    { text: 'OK', onPress: () => { navigation.push("FGScreen") }, style: 'destructive' },
    ])

    
} 
    return (
        <View style={style.container}>
            <View style={style.header}
            >
               
                <Text style={style.textStyleSign} >Enter your email</Text>
                <Text style={style.textStyle}>Lorem ipsum dolor sit amet, consectetur adipidscing.</Text>
                <Text style={style.textStyle}>integer maxximus accumsan erat id fasilicis. </Text>
            </View>
            <ScrollView>

            <View style={style.footer}>
                <View>
                    <TextInput
                        style={style.input}
                        onChangeText={onChangeEmail}
                        placeholder="Your Email"
                        value={email}

                    />
                  
                   <Text style={style.texttitle}>
                        Code was send your email:
                        
                       

                    </Text>
                    <Text style={style.textsendemail}>
                        <Text >
                            {email}
                        </Text>


                    </Text>
                    
                 


                

                   





                </View>

              
                <TouchableOpacity
                    style={style.signinbutton}
                    // onPress={(_showForgotOTP)}  
                    onPress={_showForgotOTP}
                >
                    <Text style={style.textbuttonSign} >Save Email Adress</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={style.googlebutton}
                    onPress={() => {alert('This code will expire on 5 minutes')}}
                >
                    
                    <Text style={style.textbuttongoogle} >Resend Link</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
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
        position: 'absolute',
        right: 20,
        top: 30,
        color: 'white'

    },
    header: {
        flex: 4,
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
        margin: 20,
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
        marginTop: 180,
        width: 312,
        height: 62,
       
    },
    textbuttonSign: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
       
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
        backgroundColor: "#ACBAC3",
        padding: 20,
        borderRadius: 25,
        marginTop: 15,
        width: 312,
        height: 62,
       
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
        
    },
    icon: {
        width: 30,
        height: 29,
        right: 100,
        top: 20





    },
    textsendemail:{
        top: 80,
        left: 89,
       
        

    },
    texttitle: {
        top: 80,
        left: 90

    },
    textwait:{
        top: 125,
        left: 33
    }
  




})


