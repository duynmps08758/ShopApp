import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Alert } from 'react-native'
import ModalBottomSucessOTP from '../../components/modalbottom/ModalBottomSucessOTP'


export default function ConFirmToUpScreen({navigation}) {
    const [fGOne, onChangeFGOne] = React.useState();
    const [fGTwo, onChangeFGTwo] = React.useState();
    const [fGTree, onChangeFGTree] = React.useState();

    const [fGFour, onChangeFGFour] = React.useState();
    const [modalVisibleSuccessOTP, setModalVisibleSuccessOTP] = React.useState(false);

    _handleClickModalBottomSuccessOTP = ()=>{
        setModalVisibleSuccessOTP(false)
        navigation.replace('BottomTabs')

    }
    return (
        <View style={style.main}>
            <View style={style.addHeader}>
                <TouchableOpacity
                onPress={()=>  navigation.push("nextToUpScreen")}
                >

                    <Image
                        style={[style.btnBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_back.png')} />
                </TouchableOpacity>

                <Text style={style.txtHeader}>
                    Top Up
                </Text>



            </View>
            <View style={style.Between}>
                <View style={style.txtContent}>
                    <View style={style.txtContentOne}>
                        <Text style={{ fontSize: 19.5, paddingLeft: 10, marginTop:20 }}>
                            Confirm code via phone number
                     </Text>
                    </View>
                    <View style={{ fontSize: 18, paddingLeft: 10, marginTop: 30,  }}>
                        <Text style={style.txtConten}>
                            My Pay sends a code via sms to your phone
                    </Text>
                        <Text style={style.txtConten}>
                            number  + 1424-XXXX-XX67, enter the code !
                    </Text>
                    </View>
                </View>


            </View>
            <View style={style.footer}>

                <View style={style.containerInput}>
                    <TextInput
                        //    ref={(input) => { this.input1 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGOne) => {
                            if (onChangeFGOne != "") {
                                // this.input2.focus()
                            }
                        }}
                        // placeholder="Your Email"
                        value={fGOne}

                    />
                    <TextInput
                        //    ref={(input) => { this.input2 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGTwo) => {
                            if (onChangeFGTwo != "") {
                                // this.input3.focus()
                            }
                        }}
                        // placeholder="Your Email"
                        value={fGTwo}

                    />
                    <TextInput
                        //   ref={(input) => { this.input3 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGOne) => {
                            if (onChangeFGTree != "") {
                                // this.input4.focus()
                            }
                        }}
                        value={fGTree}

                    />
                    <TextInput
                        //  ref={(input) => { this.input4 = input; }}

                        style={style.input}
                        onChangeText={onChangeFGFour}
                        // placeholder="Your Email"
                        value={fGFour}

                    />
                    


                </View>

               

                <View style={style.btnverify}>
               
                    <TouchableOpacity
                        style={style.signinbutton}
                        onPress={() => setModalVisibleSuccessOTP(true)}
                    >
                        <Text style={style.textbuttonSign} >VERIFY CODE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.googlebutton}
                        onPress={() => { alert(' This code will expire on 5 minutes') }}
                    >

                        <Text style={style.textbuttongoogle} >RESEND CODE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalBottomSucessOTP handleAction={_handleClickModalBottomSuccessOTP} isvisibleOTP={modalVisibleSuccessOTP} />
        </View>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        padding: 20
    },
    addHeader: {
        height: 55,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 18

    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginLeft: 5
    },
    txtHeader: {
        marginLeft: 110,
        fontWeight:'bold'

    },
    txtContent: {
        flexDirection: 'column'
    },
    txtContentTow: {
        marginTop: 20
    },
    containerInput: {
        flexDirection: 'row',

        justifyContent: 'center',
        marginTop: 70

    },
    input: {

        height: 60,
        width: 60,
        margin: 10,

        backgroundColor: '#F6F6F7',
        paddingLeft: 10,
        top: 35
    },
    signinbutton: {
        alignItems: "center",
        backgroundColor: "#126881",
        padding: 20,
        borderRadius: 25,
        marginTop: 190,
        width: 312,
        height: 55,
        
    },
    textbuttonSign: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    googlebutton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#ACBAC3",
        padding: 20,
        borderRadius: 25,
        marginTop: 15,
        width: 312,
        height: 55,
        // marginLeft: 12
    },
    textbuttongoogle: {
        color: '#fff',
        alignItems: 'center',
    },
    btnverify:{
        // marginTop:10,
        // marginLeft:4
        justifyContent:'center',
        alignItems:'center'
    },
    txtConten:{
        color:'#7A8D9C',
        paddingTop:10
    }
 
})
