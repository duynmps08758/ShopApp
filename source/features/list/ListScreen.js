import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import SearchableDialogPicker from '../../components/SearchableDialogPicker/SearchableDialogPicker';
import { getData, setData } from '../../store/actions/DataActions';
import { checkValidatePhone } from '../../helpers/Utils'
import { checkNumber } from '../../helpers/Utils'
const ListScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const dataState = useSelector(state => state.data)
    const [errorMessage, setErrorMessage] = useState(null)
    const [hoten, onChangeHoten] = React.useState('');
    const [diachiHk, onChangeDiachiHk] = React.useState('');
    const [diachitro, onChangeDiachitro] = React.useState('');
    const [levelSelected, setLevelSelected] = useState({ id: '', item: '' })
    const [levelSelected1, setLevelSelected1] = useState({ id: '', item: '' })
    const [levelSelected2, setLevelSelected2] = useState({ id: '', item: '' })
    const [cmnd, onChangeCmnd] = React.useState(null);
    const [sdt, onChangeSdt] = React.useState('');

    useEffect(() => {
        dispatch(getData(_handleGetSuccess))
    }, [])

    _handleGetSuccess = () => {
        console.log("GET DATA SUCCESS")
    }
    useEffect(() => {
        if (errorMessage) {
            Alert.alert(null, errorMessage,
                [
                    { text: "OK", onPress: () => setErrorMessage(null) }
                ])
        }
    }, [errorMessage])


    _checkForm = () => {
        if (hoten == '' || sdt == '' || cmnd == null || diachiHk == '' || diachitro == '' || levelSelected.item == '' || levelSelected1.item == '' || levelSelected2.item == '') {
            setErrorMessage('vui long khong duoc de trong')
        } else {
            if (!checkValidatePhone(sdt)) {
                setErrorMessage('SDT sai dinh dang')
            } else {
                if (!checkNumber(cmnd)) {
                    setErrorMessage('cmnd sai dinh dang')
                } else _showDetail()
            }
        }
        
    }

    _showDetail = () => {
        let data = {
            name: hoten,
            CMND: cmnd,
            phone: sdt,
            address: diachiHk,
            address1: diachitro,
            level: levelSelected.name,
            level1: levelSelected1.name,
            level2: levelSelected2.name



        }
        dispatch(setData(data))
        navigation.push("DetailScreen", { item: data })

    }


    return (

        <ScrollView>
            <View style={styles.cryscal}>
                <Text>
                    Nhập Họ và Tên
                </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeHoten}
                placeholder="Nhap Ho va ten"
                value={hoten}
            />
            <View style={styles.cryscal}>
                <Text>
                    Nhập CMND
                </Text>
            </View>
            <TextInput

                style={styles.input}
                onChangeText={onChangeCmnd}
                value={cmnd}
                placeholder="Nhap CMND"
                keyboardType="numeric"
            />
            <View style={styles.cryscal}>
                <Text>
                    Nhập Phone
                </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeSdt}
                value={sdt}
                placeholder="Nhap So dien thoai"
                keyboardType="numeric"
            />
            <View style={styles.cryscal}>
                <Text>
                    Nhập đỉa chỉ hổ khẩu
                </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDiachiHk}
                placeholder="Nhap Dia chi ho khau"
                value={diachiHk}
            />
            <View style={styles.cryscal}>
                <Text>
                    Nhập đỉa chỉ nơi ở
                </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDiachitro}
                placeholder="Nhap Dia chi o tro"
                value={diachitro}
            />


            <View style={styles.cryscal2}>
                <Text>
                    Chọn thu nhập
                </Text>
            </View>
            <SearchableDialogPicker

                placeHolderLabel="Chon Thu Nhap"
                textStyle={{ fontWeight: "normal" }}
                dataSource={dataState.incomes}

                hasSearchBar={true}
                selectedLabel={levelSelected.name}
                selectedValue={(item) => {
                    setLevelSelected({ id: item.id, name: item.name })
                }}

            />
            <View style={styles.cryscal1}>
                <Text>
                    Chọn chức vụ
                </Text>
            </View>

            <SearchableDialogPicker
                // style={styles.SearchableDialogPicker}
                placeHolderLabel="Chon Chuc Vu"
                textStyle={{ fontWeight: "normal" }}
                dataSource={dataState.positions}
                hasSearchBar={true}
                selectedLabel={levelSelected1.name}
                selectedValue={(item) => {
                    setLevelSelected1({ id: item.id, name: item.name })
                }}

            />
            <View style={styles.cryscal1}>
                <Text>
                    Chọn hạng mục
                </Text>
            </View>
            <SearchableDialogPicker
                // style={styles.SearchableDialogPicker}

                placeHolderLabel="Chon Hang Muc"
                textStyle={{ fontWeight: "normal" }}
                dataSource={dataState.healthinsurances}
                hasSearchBar={true}
                selectedLabel={levelSelected2.name}
                selectedValue={(item) => {
                    setLevelSelected2({ id: item.id, name: item.name })
                }}

            />






            <TouchableOpacity
                style={styles.button}
                onPress={_checkForm}
            >
                <Text>Cho Vay</Text>
            </TouchableOpacity>



        </ScrollView>





    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        // borderRadius: ,
        borderWidth: 1.5,
        marginTop: 20,
        paddingLeft: 10
    },

    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center",
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#459FD7",
        padding: 10,
        marginTop: 10,
        width: 100,
        marginLeft: 12

    },
    cryscal: {
        paddingLeft: 10,
        marginBottom: -15,

    },
    cryscal1: {
        paddingLeft: 10,
        marginBottom: -20,
        marginTop: 10


    },
    cryscal2: {
        paddingLeft: 10,
        marginBottom: -20,


    },


});

export default ListScreen;