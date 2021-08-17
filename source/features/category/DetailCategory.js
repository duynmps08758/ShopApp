import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native'
import { DataItem } from '../../components/componentsearch/DataItem'
import ItemSearch from '../../components/componentsearch/ItemSearch'
const DetailCategory = ({ navigation, route }) => {
    const data = route?.params?.item ?? {}
    // const DataItem = [{

    //    "1": [
    //         {
    //             "name": "Swift",
    //             "icon":"http://www.anphar.vn/vnt_upload/news/10_2016/chon_rau_cu_2.jpg",
    //             "value":"125",
    //             id:1,
    //             "rating":"4"
    //         },
    //         {
    //             "name": "Python",
    //             "votes": 1024
    //         },
    //         {
    //             "name": "Objective-C",
    //             "votes": 512
    //         },
    //         {
    //             "name": "Ruby",
    //             "votes": 256
    //         }
    //     ]

    // }]



    const [filterData, setFilterData] = useState([...DataItem])
    _Filter = () => {
        // setFilter = DataItem.sort((a, b) => a.value - b.value);
        // // filter= filter.filter((item) => item.value == '125').map(({id, name}) => ({id, name})); 
        // console.log('====>', Data)  
        const newData = filterData.sort((a, b) => {
            return a.value - b.value;
        });
        setFilterData([...newData]);
    }
    handListItem = ({ data }) => {
        navigation.push("productscreen", { item: data })
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewheader}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                    <Image
                        style={[styles.iconBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_back.png')} />
                </TouchableOpacity>
                <Text style={styles.textTitles}>{data?.names}</Text>
                <TouchableOpacity onPress={() => navigation.push("ShopPingCardScreen")} style={styles.btnShop}>
                    <Image
                        style={[styles.iconBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/icon_ShoppingCart.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.viewItem}>
                <Text style={styles.textItem}>20 item</Text>
                <TouchableOpacity style={styles.viewFilter} onPress={_Filter}>
                    <Image style={[styles.icon]}
                        resizeMode='contain'
                        source={require('../../ascess/image/icon_Filter.png')} />
                    <Text style={styles.textFilter}>Filters</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.viewScrollView}>
                <FlatList data={filterData}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal={false}
                    initialNumToRender={10}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <ItemSearch item={item} onClickItem={handListItem} />
                    }}
                />
            </ScrollView>
        </View>
    )
}

export default DetailCategory
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F7',
    },
    viewheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 11,
    },
    btnBack: {
        marginLeft: 29,
    },
    btnShop: {
        marginRight: 29,
    },
    iconBack: {
        width: 35,
        height: 35,
    },
    textTitles: {
        color: '#7A8D9C',
        fontWeight: 'bold',
        lineHeight: 17,
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Quicksand-Bold'
    },
    viewItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        alignItems: 'center',
        // backgroundColor:'black',
        paddingLeft: 29,
        paddingRight: 29,
        marginTop: 25,
    },
    textItem: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 25,
        color: '#ACBAC3',

    },
    icon: {
        height: 12,
        width: 12,
        marginRight: 10,
    },

    viewFilter: {
        flexDirection: 'row',

    },
    textFilter: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#7A8D9C',
    },
    viewScrollView: {
        paddingRight: 12,
        paddingLeft: 26
    },


});