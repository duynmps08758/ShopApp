import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import Stars from 'react-native-stars';
const { width, height } = Dimensions.get('screen')

const ViewPopular = ({ item,onClickItem, ClickItem }) => {
  const [valueRaTing, setValueRaTing] = useState(item?.rating)
  _onPress=()=>{
    let dataItem = {
      names: item?.name,
      values:  item?.value,
      icons: item?.icon,
      ids:  item?.id,
      ratings:item?.rating
  }


  if (onClickItem) {
      onClickItem({ datas: dataItem })
  }

  }
  onPress=()=>{
    let dataItem = {
      name: item?.name,
      coin:  item?.value,
      icon: item?.icon,
      id:  item?.id,
      rating:item?.rating
  }


  if (ClickItem) {
      ClickItem({ data: dataItem })
  }

  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.viewImageBackGound} onPress={_onPress}>
        <Image source={{ uri:  item?.icon }} style={[styles.icon]} resizeMode='cover' />
      </TouchableOpacity>
      <View style={styles.viewContainer}>
        <View>
          <View style={styles.viewName}>
            <Text numberOfLines={2} style={styles.textName}>{ item?.name || ''}</Text>
            <TouchableOpacity>
              <Image

                style={[styles.iconLove]}
                resizeMode='contain'
                source={require('../../ascess/image/icon_Love2.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textValue}>${ item?.value || ''}</Text>
          <View style={styles.viewStar}>
           
                <Stars
                  default={valueRaTing}
                  update={(val) => { setValueRaTing(val) }}
                  spacing={2.5}
                  starSize={13,9}
                  opacity={true}
                  // display={1}
                  disabled={true}
                  // halfStar={require('../../ascess/image/icon_HaftStar.png')}
                  count={5}
                  fullStar={ require('../../ascess/image/icon_RatingStar.png') }
                  emptyStar={require('../../ascess/image/icon_EStar.png')}
                  // half={true}

                />
              <Text  style={styles.textRating}>{valueRaTing}</Text>
            
            <TouchableOpacity style={styles.buttonShopping} onPress={onPress}>
              <Image
                style={[styles.iconShopCart]}
                resizeMode='contain'
                source={require('../../ascess/image/icon_Shop_Cart.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ViewPopular

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  

  },
  viewImageBackGound: {
    width: 105.6,
    height: 132,
    borderRadius: 15,
    backgroundColor: '#F6F6F7',
    borderColor: '#F6F6F7',
    borderWidth:1,
  },
  viewContainer: {
    width: 231,
    height: 102,
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderColor: '#F6F6F7',
   borderRightWidth:3,
   borderTopWidth:3,
   borderBottomWidth:3,

  },
  viewName: {
    flexDirection: 'row',
    // alignItems: 'center'
    justifyContent: 'space-between',
    marginLeft: 19
  },
  viewStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 19
  },
  textRating:{
    marginLeft:9.6,
    marginRight:50
  },

  icon: {
    width: 103.6,
    height: 130,
    borderRadius: 15,

  },

  textName: {
    fontSize: 12,
    lineHeight: 14,
    fontStyle: 'normal',
    color: '#57636F',
    fontWeight:'500',
    marginRight: 62,
    marginBottom:5,
    fontFamily:'ZillaSlab-Medium'
  },
  textValue: {
    fontSize: 18,
    lineHeight: 25,
    fontStyle: 'normal',
    color: '#126881',
    fontWeight: "700",
    marginLeft: 19,
    // marginBottom:5,
    fontFamily:'Nunito-Bold'

  },
  buttonShopping: {
    marginRight: 20
  },
  iconShopCart: {
    width: 51,
    height: 24,
  },
  iconLove: {
    width: 14.46,
    height: 12,
    marginTop: 5,
    marginRight: 18
  },
  myStarStyle: {
    color: '#FCC22C',
  },



});