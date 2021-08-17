import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import FormButton from '../../components/buttons/FontButtonSearch'
import { DataItem } from '../../components/componentsearch/DataItem'
import ItemSearch from '../../components/componentsearch/ItemSearch'





const SearchScreen = ({navigation}) => {
    const [fullData, setFullData] = useState([]);
    const [searchValue, setSearchValue] = useState()
    handListItem = ({ data }) => {
        navigation.push("productscreen", { item: data })
    }
    const [filterData, setFilterData] = useState([...DataItem])
    _Filter = () => {
        // setFilter = DataItem.sort((a, b) => a.value - b.value);
        const newData = filterData.sort((a,b) => {
            return a.value-b.value;
          });
          setFilterData([...newData]);
    }
    
    return (

        <View style={styles.Container}>

            <View style={styles.headerContainer}>
                <FormButton
                    searchValue={searchValue}
                    onChangeText={(valueCategory) => setSearchValue(valueCategory)}
                    SearchText="Search"
                />

                <View >
                <TouchableOpacity onPress={() => navigation.push("ShopPingCardScreen")} style={styles.btnShop}>
                    <Image
                        style={[styles.iconBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/icon_ShoppingCart.png')} />
                </TouchableOpacity>
             
                </View>


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

export default SearchScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F6F6F7'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginTop: 12,
        marginBottom: 30,
        // backgroundColor: 'black',
        // alignItems:'center',

    },
    viewItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        alignItems: 'center',
        // backgroundColor:'black',
        
        marginLeft: 30,
        marginRight:30
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
        // paddingRight: 18,
        paddingLeft: 18
    },
    iconBack: {
        width: 36.5,
        height: 36.5,
    },
    btnShop:{
        marginLeft: 6,
        marginRight: 31,
        marginTop:1
    }

})