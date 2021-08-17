import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import Modal from 'react-native-modal';

export default function ModalBottomSucessOTP({ isvisibleOTP, handleAction }) {
    
    const [modalVisibleSuccessOTP, setModalVisibleSuccessOTP] = useState();
    useEffect(() => {
        setModalVisibleSuccessOTP(isvisibleOTP)
    }, [isvisibleOTP])

  
    const [fGOne, onChangeFGOne] = React.useState();
    const [fGTwo, onChangeFGTwo] = React.useState();
    const [fGTree, onChangeFGTree] = React.useState();

    const [fGFour, onChangeFGFour] = React.useState();
  

    return (
        <View style={style.container}>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}

            <Modal style={style.modal} isVisible={modalVisibleSuccessOTP}>

            <View style={style.viewSlide}>
                <Image
                    style={style.btnSlide}
                    resizeMode='contain'
                    source={require('../../ascess/image/ic_slideup.png')} />
                </View>

                
                <View style ={style.header}>
                <Image
                        style={style.icon}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_success.png')} />
                  <View style={{marginTop:20}}>
                      <Text style={style.textSuccess}>
                          SUCESSS
                      </Text>
                  </View>      
                </View>
                <View style ={style.footer}>
                    <Text style={style.footerOne}>
                    Thank you your debit card has been added.
                    </Text>
                    <Text style={style.footerOne}>
                    You can easily shop with My Pay, Top Up now!
                    </Text>
                    
                </View>
                <View style={style.viewBtn}>
                <TouchableOpacity style={style.btnOk}  title="CONTINUE SHOPPING"
                  onPress={()=> {handleAction? handleAction():null}}
                 >
                    <Text style={{color:'#FFFFFF',fontSize:14}} >
                    CONTINUE TOP UP
                    </Text>
                </TouchableOpacity>

                </View>
              
               
           
              
               
                
            </Modal>
           
           
        </View>
    );

}
const style = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
    },
 
    header:{
        // marginBottom:100
        justifyContent:'center',
        alignItems:'center',

        
        
    },
    icon:{
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:32,
       

    },
    textSuccess:{
       
        
        fontSize:18,
        color:'#57636F'
    },
    footer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        paddingBottom:80
        
    },
    footerOne:{
        color:'#7A8D9C',
        fontSize:12,
        marginTop:10
        

    },
    modal:{
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        height: 400,
        margin: 0,
        borderTopRightRadius:20,
        borderTopLeftRadius:20


       
    },
    viewBtn:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10
    },
    btnOk:{
        backgroundColor:'#126881',
        width: '85%',
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    btnSlide:{
        width:43,
        height:10,
       
    },
    viewSlide:{
        alignItems:'center',
        
      
    },
   
   
   

})


