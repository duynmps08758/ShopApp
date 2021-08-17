import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, Alert, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DropdownAlert from 'react-native-dropdownalert';
import { AlertHelper } from './AlertHelper';
import Colors from '../styles/Colors'
import FontSizes from '../styles/FontSizes'
import * as utilsActions from '../store/actions/UtilsActions'
import ProgressDialog from '../components/Progress/ProgressDialog';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'



import ListScreen from '../features/list/ListScreen';
import ConFirmToUpScreen from '../features/confirmtoup/ConFirmToUpScreen'
import DetailScreen from '../features/detail/DetailScreen';
import SignInScreen from '../features/login/SignInScreen'
import SignUpScreen from '../features/register/ReGisTer'
import EmailScreen from '../features/email/EmailSreens'
import PhoneScreen from '../features/phone/PhoneScreen'
import NewPassScreen from '../features/newpassword/NewPassScreen'
import FGScreen from '../features/fgscreen/FGScreen'
import proFileScreen from '../features/profilescreen/proFileScreen'
import HomeScreen from '../features/home/HomeScreen'
import ShopPingCardScreen from '../features/shoppingcardscreen/ShopPingCardScreen'

import CheckOutScreen from '../features/checkout/CheckOutScreen'
import  ModalBottom from '../../source/components/modalbottom/ModalBottom'
import ModalBottomSucess from '../components/modalbottom/ModalBottomSucess'
import nextToUpScreen from '../features/nexttoup/nextToUpScreen'
import UpScreen from '../features/toup/UpScreen';
import  ModalBottomSucessOTP from '../components/modalbottom/ModalBottomSucessOTP'
import DetailCategory from '../../source/features/category/DetailCategory'
import NotificaTion from '../features/notification/NotificaTion'
import CategoryScreen from '../features/category/CategoryScreen'
import SearchScreen from '../features/shop/SearchScreen'
import ProductScreen from '../features/product/ProductScreen';
import { color } from 'react-native-reanimated';
import CartTotal from '../features/carttotal/CardTotal'

const MainStack = createStackNavigator()
const BottomTabs = createMaterialTopTabNavigator()

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="SignUpScreen" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="CartTotal" component={CartTotal} />

        <MainStack.Screen name="BottomTabs" component={NavBottomTabs} />
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen name="category" component={CategoryScreen} />
        <MainStack.Screen name="searchscreen" component={SearchScreen} />
        <MainStack.Screen name="ShopPingCardScreen" component={ShopPingCardScreen} />
        <MainStack.Screen name="CheckOutScreen" component={CheckOutScreen} />
        <MainStack.Screen name="detailscreen" component={DetailCategory} />
        <MainStack.Screen name="productscreen" component={ProductScreen} />
        <MainStack.Screen name="proFileScreen" component={proFileScreen} />
        <MainStack.Screen name="ModalBottom" component={ModalBottom} />
        <MainStack.Screen name="ModalBottomSucess" component={ModalBottomSucess} />
        <MainStack.Screen name="nextToUpScreen" component={nextToUpScreen} />
        <MainStack.Screen name="UpScreen" component={UpScreen} />
        <MainStack.Screen name="ModalBottomSucessOTP" component={ModalBottomSucessOTP} />
        <MainStack.Screen name="NotificaTion" component={NotificaTion} />

        <MainStack.Screen name="ConFirmToUpScreen" component={ConFirmToUpScreen} />

        <MainStack.Screen name="SignInScreen" component={SignInScreen} />
        <MainStack.Screen name="FGScreen" component={FGScreen} />

        <MainStack.Screen name="NewPassScreen" component={NewPassScreen} />
        <MainStack.Screen name="PhoneScreen" component={PhoneScreen} />
        <MainStack.Screen name="EmailScreen" component={EmailScreen} />
        <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />

        <MainStack.Screen name="ListScreen" component={ListScreen} />
        <MainStack.Screen name="DetailScreen" component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;


export const  NavBottomTabs = () => {
  return (
    <BottomTabs.Navigator tabBarPosition='bottom' swipeEnabled={false} backBehavior='none'
      initialRouteName="Home"  screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
     
      tabBar={props => <CustomTab {...props}

       />}
     
      >
  
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Shop" component={SearchScreen} />
      <BottomTabs.Screen name="NotificaTion" component={NotificaTion} />
      <BottomTabs.Screen name="Account" component={proFileScreen} />
    </BottomTabs.Navigator>
  );
}

function CustomTab({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50,backgroundColor: '#fff', borderRadius: 200, bottom: 5,borderWidth:0.01,borderColor:'#F6F6F7'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log('----> nhan tab: ', label)
    
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        

         
        };
     let icon = ""
        switch (index) {
          case 0: {
            if(isFocused){
              icon = require('../ascess/image/icon_House.png');
              break
            }
            else icon = require('../ascess/image/icon_Home.png');
           
    
            break
          }
          case 1: {
            if(isFocused){
              icon = require('../ascess/image/icon_ShopColor.png');
              break
            }
           else  icon = require('../ascess/image/icon_ShopHome.png');
         
            break
          }
      
          case 2: {
            if(isFocused){
              
              icon = require('../ascess/image/iconabout.png');
              break
            }
            icon = require('../ascess/image/icon_about.png');
          
            break
          }
          case 3: {
            if(isFocused){
              
              icon = require('../ascess/image/icon_user_color.png');
              break
            }
            icon = require('../ascess/image/ic_user.png');
            break
          }

        }

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1 }}
            
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: Colors.lightGray }}>
{/* //               <Text style={{ color: Colors.black, fontSize: FontSizes.size18, fontWeight: isFocused ? '700' : 'normal' }}>{label}</Text>
//               <View style={{ position: 'absolute', bottom: 0, height: 4, width: '60%', backgroundColor: isFocused ? Colors.main_color : 'transparent', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} /> */}
           <Image
                style={{ width: 30, height: 30, }}
                resizeMode='contain'
                source={icon} 
                />
                
            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
