import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Alert } from 'react-native'
import SearchableDialogPicker from '../../components/SearchableDialogPicker/SearchableDialogPicker';
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'


export default nextToUpScreen = ({navigation}) => {
    const [userName, onChangeUserName] = React.useState();
    const [bank, onChangebank] = React.useState();
    const [accountNumber, onChangeAccountNumber] = React.useState();
    const [expire, onChangeExpire] = React.useState();
    const [security, onChangeSecurity] = React.useState();
    const dataState = useSelector(state => state.data)
    const [levelSelected2, setLevelSelected2] = useState({ id: '', item: '' })
    _showForgotOTP = () =>{
        Alert.alert(null, " This code will expire on 5 minutes",
        [
        // { text: 'Không', onPress: () => { }, style: 'default' },
        { text: 'OK', onPress: () => { navigation.push("ConFirmToUpScreen") }, style: 'destructive' },
        ])
    
        
    } 

   
    return (
        
        <View style={style.main}>
            <View style={style.addHeader}>
                <TouchableOpacity
                onPress={()=>  navigation.push("UpScreen")}
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
                <View>
                    <Text style={{ fontSize: 20, marginTop:23,marginBottom:15,color:'#57636F',fontFamily:'ZillaSlab' }}>
                        Add a debit card
                     </Text>
                </View>
                <View>
                    <TextInput style={style.txtInput}
                        onChangeText={onChangeUserName}
                        placeholder="Account name"
                        value={userName}
                    >

                    </TextInput>
                </View>
                <View>
                <SearchableDialogPicker
                style={style.searchable}
                // style={styles.SearchableDialogPicker}

                placeHolderLabel="Bank"
                textStyle={{ fontWeight: "normal" }}
                dataSource={dataState.healthinsurances}
                hasSearchBar={true}
                selectedLabel={levelSelected2.name}
                selectedValue={(item) => {
                    setLevelSelected2({ id: item.id, name: item.name })
                }}

            />
                    
                </View>
                <View>
                    <TextInput style={style.txtInput}
                        onChangeText={onChangeAccountNumber}
                        placeholder="Account number"
                        value={accountNumber}
                        
                       
                    >

                    </TextInput>
                </View>
                <View style={style.inputRow}>
                    <TextInput style={style.input1}
                        onChangeText={onChangeExpire}
                        placeholder="Expire"
                        value={expire}
                    />
                    <TextInput style={style.input2}
                        onChangeText={onChangeSecurity}
                        placeholder="Security Code"
                        value={security}
                        secureTextEntry={true}
                    />
                </View>
                

            </View>
            <View style={style.viewAdd}>
                <TouchableOpacity style={style.btnAdd}
                 onPress={_showForgotOTP}
                >
               <Text style={{color:'#FFFFFF'}}>
               ADD DEBIT CARD
               </Text>
                </TouchableOpacity>
            </View>


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
        paddingBottom:18

    },
    btnBack: {
        width: 40,
        height: 40,
        borderRadius: 30,
        // marginLeft: 3
    },
    txtHeader: {
        marginLeft: 110, 
        color:'#7A8D9C',
        fontWeight:'bold'

    },
    Between: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    txtInput: {
        marginTop: 15,
        height: 62,
        borderRadius: 30,
        backgroundColor: '#F6F6F7',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        color:'#ACBAC3'

    },
    input1: {
        marginTop: 15,
        height: 62,
        width:155,
        borderRadius: 25,
        backgroundColor: '#F6F6F7',
        paddingLeft:20
    },
    input2: {
        marginTop: 15,
        height: 62,
        width:155,
        borderRadius: 25,
        backgroundColor: '#F6F6F7',
        paddingLeft:20
        
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnAdd:{
        backgroundColor:'#ACBAC3',
        width:319,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
        
    },
    viewAdd:{
        alignItems:'center'
    },
   
})
