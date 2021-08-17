import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Text, Modal, FlatList, Dimensions } from 'react-native'
import FormButton from '../../components/buttons/FontButtonSearch'
import FormButtonCategory from '../../components/buttons/FontButtonCategory'
import { Data } from '../../components/buttons/Data'

import ModalHome from '../../components/modal/ModalHome'
import ViewDiscout from '../../components/discout/ViewDiscout'
import { DiscoutData } from '../../components/discout/DiscoutData'
import { DataPopular } from '../../components/popular/DataPopular'
import ViewPopular from '../../components/popular/ViewPopular'


const { width, height } = Dimensions.get('screen')

export default HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState()
  const [isShow, setIsShow] = useState(false)
  const showModal = () => setIsShow(true);
  const hideModal = () => setIsShow(false);

  _showToUp = () => {

    navigation.push("UpScreen")
  };
  _ShowCategory = ({ data }) => {

    navigation.push("category", { item: data })

    console.log("duydddddd", data)
  }


  const [isActive, setActive] = useState(false);
  ListItem = ({ datas }) => {
    navigation.push("productscreen", { item: datas })
  }
  AddCart = ({ data }) => {
    navigation.push("ShopPingCardScreen", { item: data })
  }
  FlatListHeader = () => {
    return (
      <View
        style={{
          marginRight: 19,
          // shadowOffset: {
          //   width: 0,
          //   height: 16,
          // },
          // shadowOpacity: 1,
          // shadowRadius: 7.49
        }}
      >
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View Style={styles.container}>  */}
      <View style={styles.header}>
        <View style={styles.headerContainer}>

          <FormButton
            // nextScreen={()=>navigation.push("searchscreen")}
            searchValue={searchValue}
            onChangeText={(valueCategory) => setSearchValue(valueCategory)}
            SearchText="Search"
          />

          <View >
            {/* <ButtonShopping onPress={() => navigation.push("ShopPingCardScreen")} /> */}
            <TouchableOpacity onPress={() => navigation.push("ShopPingCardScreen")} style={styles.btnShop}>
              <Image
                style={[styles.iconBack]}
                resizeMode='contain'
                source={require('../../ascess/image/icon_ShoppingCart.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.textCategory}>Category</Text>
          <View style={styles.buttonCategory}>
            <FlatList
              data={Data}
              initialNumToRender={5}
              ListHeaderComponent={FlatListHeader}
              keyExtractor={(item, index) => 'key' + index}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return <FormButtonCategory item={item} onClickItem={_ShowCategory} />
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.viewMid}>
        <View style={styles.viewMidChild}>
          <View style={styles.viewChild}>
            <View style={styles.viewCurrency}>
            <TouchableOpacity style={styles.buttonWallet}>
              <Image
                style={[styles.iconWallet]}
                resizeMode='contain'
                source={require('../../ascess/image/icon_Wallet.png')} />
            </TouchableOpacity>
            <Text style={styles.textValue}>$1.500</Text>
            </View>
            <View  style={styles.viewbtn}>
              <View style={styles.Custom}>
                <TouchableOpacity style={styles.viewMore}>
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_Pay.png')} />
                  <Text style={styles.textCustom}>Pay</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.Custom}>
                <TouchableOpacity onPress={_showToUp} style={styles.viewMore}>
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_ToUp.png')} />
                  <Text style={styles.textCustom}>To Up</Text>
                </TouchableOpacity>

              </View>

              <View style={styles.Custom}>

                <TouchableOpacity onPress={showModal} style={styles.viewMore} >
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_More.png')} />
                  <Text style={styles.textCustom}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.textSaleDiscount}>Sale Discount</Text>
          <View>
            <View style={styles.viewFastList}>

              <FlatList data={DiscoutData}
                ListHeaderComponent={FlatListHeader}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return <ViewDiscout detail={item} onClickItem={ListItem} />
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textPopular}>Popular</Text>
          <FlatList data={DataPopular}

            keyExtractor={(item, index) => 'key' + index}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <ViewPopular item={item} onClickItem={ListItem} ClickItem={AddCart} />
            }}
          />
        </View>
      </View>

      <ModalHome isVisibale={isShow} onCloseModal={hideModal} />
      {/* </View>  */}
    </ScrollView >

  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',

  },

  header: {
    flex: 1.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 12,
    backgroundColor: '#F6F6F7',
    // backgroundColor: 'black',

  },


  footer: {
    flex: 3,
    backgroundColor: '#ffff'

  },


  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginBottom: 31
  },

  textCategory: {
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#7A8D9C',
    marginBottom: 20,
    marginLeft: 30,
    fontWeight: "500",
    fontFamily: 'ZillaSlab-Medium'
  },
  buttonCategory: {
    marginBottom: 30,
  },
  viewMid: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  viewMidChild: {
    width: '87%',
    height: 65,
    backgroundColor: '#FFA771',
    borderRadius: 10,
    top: -32,

  },
  iconWallet: {
    width: 28,
    height: 28,
    marginLeft: 23.5
  },
  textValue: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 25,
    fontWeight: 'bold',
    marginRight: 25,

  },
  viewChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,

  },
  viewCurrency:{
   flexDirection:'row'
  },
  buttonWallet: {
    marginRight: 18,

  },
  viewbtn:{
   flexDirection:'row',
    marginRight: 38,
  },
  Custom: {
    alignItems: 'stretch',
    marginLeft: 28,
  },
  viewMore:{
   width: 30,
   height:37,
  //  backgroundColor:'red',
   alignItems:'center',
   flexDirection:'column',
    //  marginRight: 10,
  },
  iconCustom: {
    width: 20,
    height: 20,
    marginBottom: 6,
    // marginRight: 10,
  },
  textCustom: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'bold',
    // marginRight: 38,
    fontFamily: 'Quicksand-Bold'
  },

  modal: {
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  textSaleDiscount: {
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#7A8D9C',
    marginBottom: 24,
    marginLeft: 29,
    fontWeight: "500",
    fontFamily: 'ZillaSlab-Medium'
  },
  textPopular: {
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 24,
    color: '#7A8D9C',
    marginBottom: 22,
    marginLeft: 29,
    fontWeight: "500",
    fontFamily: 'ZillaSlab-Medium'
  },
  iconBack: {
    width: 36.5,
    height: 36.5,
  },
  btnShop: {
    marginLeft: 6,
    marginRight: 31,
    marginTop: 1
  },



});