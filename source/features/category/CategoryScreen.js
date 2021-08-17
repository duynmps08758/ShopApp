import * as React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';

import ViewPopular from '../../components/popular/ViewPopular';
import ItemCategory from '../../components/category/ItemCategory'

const CategoryScreen = ({ navigation, route }) => {

    const data = route?.params?.item ?? {}
    const id = data?.ids
    console.log('------>', id)
    const dataCategor = [
                {
                    amount: '18',
                    name: 'Sofa',
                    icon: 'https://kdtvn.com/wp-content/uploads/2018/09/sofa-vang-da-dep-gia-re.jpg',
                    id: 1
                },
                {
                    amount: '10',
                    name: 'Chair',
                    icon: 'https://winchair.vn/wp-content/uploads/2020/02/Ghe-ban-an-Win-chair-Malmo-mau-kem.jpg',
                    id: 2
                },
                {
                    amount: '11',
                    name: 'Bed',
                    icon: 'https://gotrangtri.vn/wp-content/uploads/2017/07/Giuong-ngu-hien-dai-tien-dung-GHS-996-ava.jpg',
                    id: 3
                },
                {
                    amount: '11',
                    name: 'Drawer',
                    icon: 'https://product.hstatic.net/1000360516/product/04_79ae482ab8eb4674b8004997fe6271f1_master.jpg',
                    id: 4
                },
                {
                    amount: '10',
                    name: 'Plant',
                    icon: 'https://bancongxanh.com/wp-content/uploads/2019/05/c%C3%A2y-c%E1%BA%A3nh-tai-ph%E1%BA%ADt-phong-th%E1%BB%A7y.png',
                    id: 5
                },
                {

                    amount: '10',
                    name: 'Pillow',
                    icon: 'https://img.lovepik.com/photo/50100/7916.jpg_wh860.jpg',
                    id: 6
              
},]
  
const DataPopular = [{
    name: 'Giường thông minh',
    icon: 'http://bizweb.dktcdn.net/thumb/grande/100/347/061/products/tb2veukrv1tbunjy0fjxxajyxxa-3232080495-copy.jpg?v=1560163591270',
    value: '125',
    id: 1,
    rating: '4'
},
{
    name: 'Tủ gỗ',
    icon: 'https://ssr.vn/wp-content/uploads/2019/12/chest-of-drawers-1a-540x540.jpg',
    value: '25',
    id: 2,
    rating: '5'
},
{
    name: 'Cây nghệ thuật',
    icon: 'http://daynghenongdan.vn/uploads/cay-canh-nghe-thuat.jpg',
    // icon: require('../../ascess/image/icon_WomenFashion.png'),
    value: '15',
    id: 3,
    rating: '5'
},
{
    name: 'Xương rồng gấu',
    icon: 'https://static123.com/uploads/images/thumbs/900x600/fit/2019/11/06/bds123-cay-xuong-rong-4_1573024274.png',
    // icon: require('../../ascess/image/icon_WomenFashion.png'),
    value: '45',
    id: 4,
    rating: '5'
},

]
handListItem = ({ data }) => {
    navigation.push("detailscreen", { item: data })
}
ListItem = ({ datas }) => {
    navigation.push("productscreen", { item: datas })
}

return (

    <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.viewheader}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                    <Image
                        style={[styles.iconBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_back.png')} />
                </TouchableOpacity>
                <Text style={styles.textTitles}>{data?.titles}</Text>
                <TouchableOpacity onPress={() => navigation.push("ShopPingCardScreen")} style={styles.btnShop}>
                    <Image
                        style={[styles.iconBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/icon_ShoppingCart.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.textCategory}>Category</Text>
            <View>
                <FlatList
                    data={dataCategor}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <ItemCategory item={item} onClickItem={handListItem} />
                    }}
                />
            </View>

        </View>
        <Text style={styles.textPopular}>Popular</Text>
        <View style={styles.footer}>
            <FlatList data={DataPopular}
                keyExtractor={(item, index) => 'key' + index}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <ViewPopular item={item} onClickItem={ListItem} />
                }}
            />
        </View>
    </View>

)

}

export default CategoryScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    header: {
        flex: 2,
        backgroundColor: '#F6F6F7',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

    },
    footer: {
        flex: 2.7,
        backgroundColor: '#ffff',
    },
    viewheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 11,
    },

    iconBack: {
        width: 35,
        height: 35,
    },
    textPopular: {
        marginTop: 22,
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#7A8D9C',
        marginBottom: 22,
        marginLeft: 29,
        fontWeight: "500",
        fontFamily: 'ZillaSlab-Medium'
    },
    textCategory: {
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#7A8D9C',
        marginBottom: 20,
        marginTop: 41,
        marginLeft: 29,
        fontWeight: "500",
        fontFamily: 'ZillaSlab-Medium'
    },
    btnBack: {
        marginLeft: 29,
    },
    btnShop: {
        marginRight: 29,
    },
    textTitles: {
        color: '#7A8D9C',
        fontWeight: 'bold',
        lineHeight: 17,
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Quicksand-Bold'
    },


});