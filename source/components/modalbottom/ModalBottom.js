import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import Modal from 'react-native-modal';
import ModalBottomSucess from '../modalbottom/ModalBottomSucess'
import { createStackNavigator } from '@react-navigation/stack';

export default function ModalBottom({  isVisible, handleAction }) {
    const [isModalVisible, setModalVisible] = useState();
    useEffect(() => {
        setModalVisible(isVisible)
    }, [isVisible])
   

    
    const [fGOne, onChangeFGOne] = React.useState();
    const [fGTwo, onChangeFGTwo] = React.useState();
    const [fGTree, onChangeFGTree] = React.useState();

    const [fGFour, onChangeFGFour] = React.useState();
    // const [isModalVisible, setIsModalVisible] = useState();
    const [isModal, setModal] = useState(false);


    return (
            <Modal style={style.modedal} isVisible={isModalVisible}>
               <View style={style.viewSlide}>
                <Image
                    style={style.btnSlide}
                    resizeMode='contain'
                    source={require('../../ascess/image/ic_slideup.png')} />
                </View>
                <View style={style.txtTitle}>
                <Text style={{ color: '#7A8D9C' }}> Enter The My Pay Pin</Text>
                </View>
                <View style={style.containerInput}>

                    <TextInput
                        //    ref={(input) => { this.input1 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGOne) => {
                            if (onChangeFGOne != "") {
                                // this.FGTw.focus()
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
                    <View>
                    </View>
                </View>




                <View style={style.buttonWallet}>
                    <TouchableOpacity >
                        <Text style={{ color: '#E41A4A',fontSize:12,marginTop:5}}>
                            Forgot Pin?
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={style.btnBuy} title="Buy" 
                       onPress={() => {handleAction ? handleAction(): null}}   
                    >
                        <Text style={{color:'#FFFFFF'}}>
                            BUY
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </Modal>
    );

}
const style = StyleSheet.create({

    container: {

        
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    input: {
        height: 65,
        width: 65,
        margin: 10,
        backgroundColor: '#F6F6F7',
        paddingLeft: 10,
        top: 35,
        borderRadius:15
    },
    buttonWallet: {
        alignItems: 'flex-end',
        paddingTop: 30,
        marginBottom: 30,
        paddingRight:20
        
        

    },
    content: {


        // justifyContent:'flex-end',
        backgroundColor: '#FFFF'

    },
    modedal: {
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        height: 300,
        margin: 0,
        borderTopRightRadius:20,
        borderTopLeftRadius:20



    },
    btnBuy: {
        backgroundColor: '#126881',
        borderRadius: 20,
        marginBottom: 15,
        width: '85%',
        height: 52,
        justifyContent: 'center',
        alignItems: 'center'

    },
    btnSlide:{
        width:43,
        height:10,
       
    },
    viewSlide:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:30
    },
    txtTitle:{
        justifyContent:'center',
        alignItems:'center',
        
    }
})


