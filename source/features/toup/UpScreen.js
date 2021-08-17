import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default UpScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <View style={{ flex: 1 }}>
                 <View style={style.herder}>
                    <TouchableOpacity
                        onPress={() => navigation.push("BottomTabs")}
                    >

                        <Image
                            style={[style.buttonImageBack]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_back.png')} />
                    </TouchableOpacity>

                    <Text style={style.textheader}>
                        Top Up
                    </Text>



                </View>
                <View style={style.content}>
                    <View style={{paddingLeft:15,marginTop:10}}>
                        <Text style={{color:'#7A8D9C'}}>Nominal input</Text>
                    </View>
                    <View style={style.viewTextInput}>
                        <TextInput style={style.textInput}>
                            $0
                    </TextInput>
                    </View>
                    <View style={style.mainContent}>
                        <View style={style.viewColumn}>
                            <View style={style.viewCoin}>
                                <Image
                                    style={[style.btnPayMent1]}
                                    resizeMode='contain'
                                    source={require('../../ascess/image/ic_coin.png')} />


                            </View>
                            <View style={style.textCoin}>
                                <Text style={style.coin}>
                                    10$
                        </Text>
                            </View>
                        </View>
                        <View style={style.viewColumn}>
                            <View style={style.viewCoin}>
                                <Image
                                    style={[style.btnPayMent]}
                                    resizeMode='contain'
                                    source={require('../../ascess/image/ic_coin2.png')} />
                            </View>
                            <View style={style.textCoin}>
                                <Text style={style.coin}>10$</Text>
                            </View>
                        </View>

                        <View style={style.viewColumn}>
                            <View style={style.viewCoin}>
                                <Image
                                    style={[style.btnPayMent]}
                                    resizeMode='contain'
                                    source={require('../../ascess/image/ic_coin3.png')} />
                            </View>
                            <View style={style.textCoin}>
                                <Text style={style.coin}>15$</Text>
                            </View>
                        </View>


                        <View style={style.viewColumn}>
                            <View style={style.viewCoin}>
                                <Image
                                    style={[style.btnPayMent]}
                                    resizeMode='contain'
                                    source={require('../../ascess/image/ic_coin4.png')} />
                            </View>
                            <View style={style.textCoin}>
                                <Text style={style.coin}>10$</Text>
                            </View>
                        </View>
                    </View>
                </View>
               <View style={style.footer}>
                    <TouchableOpacity
                       onPress={()=>  navigation.push("nextToUpScreen")}>
                        <Image
                            style={style.buttonAdd}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_btnaddcard.png')} />
                   </TouchableOpacity>
                    <View style={style.textAdd}>
                        <Text style={style.textOne}>
                            Add a debit card
                    </Text>
                        <Text style={style.textTwo}>
                            Can this balance directly from here
                    </Text>
                    </View>
                    <TouchableOpacity  onPress={()=>  navigation.push("nextToUpScreen")}>
                        <Image
                            style={[style.buttonNext]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_btnnextcard.png')} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={style.viewEnd}>
                <TouchableOpacity style={style.viewContinue}>
                    <Text style={{color:'#FFFFFF'}}>
                        CONTINUE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 20
    },

    herder: {


        height: 55,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        


    },
    buttonImageBack: {
        width: 40,
        height: 40,
        borderRadius: 30,
        // marginLeft: 5
    },
    textheader: {

        marginLeft: 110,
        color:'#7A8D9C',
        fontWeight:'bold'
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 1
        // alignItems: 'center'


    },
    content: {
        borderRadius: 20,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#F6F6F7',
        marginTop: 40,

       
    },
    mainContent: {
        flexDirection: 'row',
        padding: 10,
        paddingTop:20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        width:270,
        color:'#7A8D9C',
        
        
    },

    viewCoin: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10


    },
    viewColumn: {
        flexDirection: 'column',

    },
    viewColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    textCoin: {
        paddingTop: 6,
       
    },
    viewTextInput: {
        paddingTop: 20,
        // paddingRight: 20,
        paddingBottom: 10,
        alignItems:'center',
        justifyContent:'center'

    },
    footer:{
        backgroundColor:'#F6F6F7',
        flexDirection:'row',
        height: 85,
        alignItems:'center',
        marginTop:15,  
        borderRadius: 15,
        
    
    },
    textAdd: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        
    },
    buttonAdd: {
        height: 35,
        width: 35,
        marginLeft:25
    },
    buttonNext: {
        width: 25,
        height: 25,
        marginRight:25
    },
    textOne: {
        marginRight: 80,
        fontWeight: 'bold',
        fontSize: 14,
        color:'#57636F',
        
        
        
    },
    textTwo: {
        fontSize: 12,
        marginTop:10,
        color:'#7A8D9C',
        
    },
    viewContinue: {
        backgroundColor: '#ACBAC3',
        width: 319,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50
    
    },
    viewEnd: {
        marginTop: 12,
        backgroundColor: '#ACBAC3',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius:50
    },
    coin:{
        fontWeight:'bold',
        color:'#126881'
    },
    btnPayMent:{
        width:36,
        height:24
    },
    btnPayMent1:{
        width:17,
        height:18.5
    },
    
})
