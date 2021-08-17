// import React from 'react'
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler'
// import SearchableDialogPicker from '../../components/SearchableDialogPicker/SearchableDialogPicker';


// export default AddDebitCardScreen = ({navigation}) => {
//     const [userName, onChangeUserName] = React.useState();
//     const [bank, onChangebank] = React.useState();
//     const [accountNumber, onChangeAccountNumber] = React.useState();
//     const [expire, onChangeExpire] = React.useState();

//     return (
//         <View style={style.container}>
//             <View style={style.herder}>
//                 <TouchableOpacity
//                 onPress={()=>  navigation.push("UpScreen")}
//                 >

//                     <Image
//                         style={[style.buttonImageBack]}
//                         resizeMode='contain'
//                         source={require('../../ascess/image/ic_back.png')} />
//                 </TouchableOpacity>

//                 <Text style={style.textheader}>
//                     To Up
//                     </Text>



//             </View>
//             <View style={style.contentt}>
//                 <View>
//                     <Text style={{fontSize:17}}>
//                     Add a debit card
//                     </Text>
//                 </View>
//                 <View>
//                     <TextInput style={style.inputp}
//                        onChangeText={onChangeUserName}
//                        placeholder="Nhap UserName"
//                        value={userName}
//                     >
                          
//                     </TextInput>
//                 </View>
//                 <View>
//                     <TextInput style={style.inputp}
//                        onChangeText={onChangebank}
//                        placeholder="bank"
//                        value={bank}
//                     >
                          
//                     </TextInput>
//                 </View>
//                 <View>
//                     <TextInput style={style.inputp}
//                        onChangeText={onChangeAccountNumber}
//                        placeholder="Account Number"
//                        value={accountNumber}
//                     >
                          
//                     </TextInput>
//                 </View>
//                 <View style={style.inputRow}>
//                     <TextInput style={style.input1}
//                        onChangeText={onChangeAccountNumber}
//                        placeholder="Account Number"
//                        value={accountNumber}
//                    />
//                     <TextInput style={style.input2}
//                        onChangeText={onChangeAccountNumber}
//                        placeholder="Account Number"
//                        value={accountNumber}
//                    />
//                 </View>

//             </View>
            
           
//             <View style={style.viewEndd}>
//             <TouchableOpacity style={style.viewContinue}>
//                     <Text>
//                     ADD DEBIT CARD
//                     </Text>
//             </TouchableOpacity>
//             </View>
//         </View>
//     )
// }
// style = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: '#ffff',
//         padding: 20 
//     },
    
//     herder: {
//         // flex: 1,
        
//         height: 55,
//         backgroundColor: '#FFFFFF',
//         flexDirection: 'row',
//         alignItems: 'center',
        


//     },
//     buttonImageBack: {
//         width: 40,
//         height: 40,
//         borderRadius: 30,
//         // marginLeft: 5
//     },
//     textheader: {
//         marginLeft: 110
//         // alignItems: 'center',
//         // justifyContent: 'center',
//         // paddingHorizontal: 1
//         // alignItems: 'center'


//     },
//    contentt:{
//         flexDirection:'column',
//         backgroundColor:'#FFFFFF',
//         flex:1
//    },
//     mainContent: {
//         flexDirection: 'row',
//         padding: 10,
//         alignItems: 'center',
//         justifyContent:'center'
//     },
//     textInput: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 10
//     },
   
//     viewCoin:{
//         width: 65,
//         height: 65,
//         backgroundColor: '#FFFFFF',
//         alignItems: 'center',
//         justifyContent: 'center'
        
        
//     },
//     viewColumn:{
//         flexDirection: 'column',
        
//     },
//     viewColumn:{
//         alignItems:'center',
//         justifyContent:'center',
//         paddingLeft: 5,
//         paddingRight: 5
//     },
//     textCoin:{
//         paddingTop: 6
//     },
//     viewTextInput:{
//         paddingLeft: 20,
//         paddingRight: 20,
//         paddingBottom: 10
        
//     },
   
//     textAdd:{
//         flexDirection:'column',
//         flex: 1,    
//         alignItems:'center'
//     },
//     buttonAdd:{
//         height:35,
//         width: 35
//     },
//     buttonNext:{
//         width: 25,
//         height: 25
//     },
//     textOne:{
//         marginRight:80,
//         fontWeight:'bold',
//         fontSize: 14
//     },
//     textTwo:{
//         fontSize: 12
//     },
//     viewContinue:{
//       backgroundColor:'#ACBAC3',
//       width: 280,
//       height: 45,
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     viewEndd:{
//         // flex:0.5,
//         alignItems:'center',
//         justifyContent:'flex-end'
//     },
//     inputp:{
//        marginTop:12,
//         height: 62,
//         width: 320,
//         borderRadius: 25,
//         backgroundColor: '#E4E4E4',
     
       
        
//     },
//     inputRow:{
//         flexDirection:'row',
//         justifyContent:'space-between'
//     },
//     input1:{
        
//         marginTop:12,
//         height: 62,
//         width: 155,
//         borderRadius: 25,
//         backgroundColor: '#E4E4E4',
//     },
//     input2:{
//         width: 155,
//         marginTop:12,
//         height: 62,
//         borderRadius: 25,
//         backgroundColor: '#E4E4E4',
//     }
// })
