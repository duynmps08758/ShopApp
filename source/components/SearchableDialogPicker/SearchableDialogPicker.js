import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    FlatList,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import Colors from '../../styles/Colors'
import FontSizes from '../../styles/FontSizes';

const { width, height } = Dimensions.get('screen')

export default SearchableDialogPicker = ({ dataSource, placeHolderLabel, selectedLabel, hasSearchBar = true,
    searchBarPlaceHolder, inputSearchStyle, selectedValue, containerStyle, scrollStyle, textStyle }) => {

    const [isDialog, setDialog] = useState(false)
    const [data, setData] = useState([])
    const [selectedFlag, setSelectedFlag] = useState(false)

    useEffect(() => {
        dataSource && isDialog && setData(dataSource)
    }, [dataSource, isDialog])
    console.log(dataSource);

    useEffect(() => {
        setSelectedFlag(selectedLabel ? true : false)
    }, [selectedLabel])

    _searchFilterFunction = (searchText, data) => {
        let newData = [];
        if (searchText) {
            newData = data.filter((item) => item.name.toUpperCase().search(searchText.toUpperCase()) >= 0);
            setData([...newData])
        } else {
            setData(dataSource)
        }
    }

    _handleClickItem = (e) => {
        setDialog(false)
        setSelectedFlag(true)
        selectedValue && selectedValue(e)
    }

    _handleOpenDialog = () => {
        setDialog(true)
    }

    _onCloseDialog = () => {
        setDialog(false)
    }

    _renderItemListValues = (item, index) => {
        return item ? (
            <TouchableHighlight
                underlayColor={Colors.orange_3}
                style={styles.containerItemSearchable}
                onPress={() => _handleClickItem(item)}
            >
                <Text style={[styles.textPickItem]}>{item.name}</Text>
            </TouchableHighlight>
        ) : <Text style={[styles.textPickItem, { paddingVertical: 25, alignSelf: 'center' }]}>Không có mục lựa chọn</Text>
    }

    _renderEmptyItem = () => {
        return <View style={{ backgroundColor: '#FAD', height: 100, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', marginBottom: 10, color: Colors.gray9E }}>Không có thông tin</Text>
        </View>
    }

    return (
        <TouchableHighlight underlayColor={Colors.orange_3} style={[styles.container, containerStyle]} onPress={_handleOpenDialog} >
            <View>
                {selectedFlag ?
                    <Text numberOfLines={2} style={[styles.textItem, textStyle]}>{selectedLabel}</Text> :
                    <Text numberOfLines={2} style={[styles.textItem, textStyle]}>{placeHolderLabel}</Text>}
                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../components/image/download.png')} />

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={isDialog}
                    style={styles.modalStyle}>
                    <TouchableOpacity style={[styles.containerViewDialog]} onPress={_onCloseDialog}>
                        {hasSearchBar && <TextInput
                            onChangeText={text => _searchFilterFunction(text, dataSource)}
                            placeholder={searchBarPlaceHolder}
                            style={[styles.inputSearch, inputSearchStyle]}
                            placeholderTextColor={Colors.gray9E}
                            underlineColorAndroid="transparent"
                            keyboardType="default"
                            returnKeyType={"done"}
                            blurOnSubmit={true}
                        />}
                        <FlatList
                            style={[styles.scroll, scrollStyle]}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            extraData={item => item.id}
                            overScrollMode="never"
                            keyboardShouldPersistTaps="always"
                            numColumns={1}
                            data={data}
                            renderItem={({ item, index }) =>
                                _renderItemListValues(item, index)
                            }
                            ListEmptyComponent={_renderEmptyItem}
                            ListHeaderComponent={<View style={{ height: 8, width: "100%", backgroundColor: Colors.white }} />}
                            ListFooterComponent={<View style={{ height: 8, width: "100%", backgroundColor: Colors.white }} />}
                        />
                    </TouchableOpacity>
                </Modal>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 62,
        backgroundColor:'#F6F6F7',
        // color:'#fad',
        borderRadius: 50,

        justifyContent: 'center',
        paddingLeft: 15,
        marginTop: 15,
  
        paddingLeft: 20,

        
        
        
    },
    textItem: {
        marginRight: 25,
        color:'#ACBAC3',
      
        fontSize: FontSizes.size14,
      
    },
    textPickItem: {
        color: Colors.black,
        fontSize: FontSizes.size14,
    },
    icon: {
        position: 'absolute',
        right: 13,
        width: 12,
        height: 12,
        top: 5
    },
    containerItemSearchable: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: 'white',
        
    },
    modalStyle: {
        flex: 1,
    },
    containerViewDialog: {
        width: width,
        height: height,
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        width: '80%',
        maxHeight: height / 2,
        marginBottom: 60,
    },
    inputSearch: {
        width: '80%',
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
    }
})