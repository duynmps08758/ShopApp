import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image, Modal } from 'react-native';

const { width, height } = Dimensions.get('screen')
const ModalHome = ({ isVisibale, onCloseModal }) => {

    const [modalVisible, setModalVisible] = useState()

    useEffect(() => {
        setModalVisible(isVisibale)
    }, [isVisibale])


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onCloseModal ? onCloseModal() : null
            }}
        >
            <TouchableOpacity style={styles.view} activeOpacity={1} onPress={() => {
                onCloseModal ? onCloseModal() : null
            }}>
                <View style={styles.viewContainer}>
                    <View style={styles.viewtriangleContainer}>
                        <View style={styles.triangle} />
                    </View>
                    <View style={styles.Container}>
                        <TouchableOpacity style={styles.viewButton}  /*onPress={item.action}*/ >
                            <Image
                                style={[styles.icon]}
                                resizeMode='contain'
                                source={require('../../ascess/image/icon_Charge.png')}
                            />

                            <Text style={styles.viewText}>Charge</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.viewButton} /*onPress={item.action}*/ >

                            <Image
                                style={[styles.icon]}
                                resizeMode='contain'
                                source={require('../../ascess/image/icon_Transfer.png')}
                            />
                            <Text style={styles.viewText}>Transfer</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.viewButton}/*onPress={item.action}*/ >

                            <Image
                                style={[styles.icon]}
                                resizeMode='contain'
                                source={require('../../ascess/image/icon_Credit.png')}
                            />
                            <Text style={styles.viewText}>Credit</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.viewButton} /*onPress={item.action}*/ >


                            <Image
                                style={[styles.icon]}
                                resizeMode='contain'
                                source={require('../../ascess/image/icon_PayLater.png')}
                            />
                            <Text style={styles.viewText}>PayLater</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.viewButton}  /*onPress={item.action}*/ >

                            <Image
                                style={[styles.icon]}
                                resizeMode='contain'
                                source={require('../../ascess/image/icon_Settings.png')}
                            />
                            <Text style={styles.viewText}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal >
    );
};

export default ModalHome

const styles = StyleSheet.create({
    view: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 280,

    },
    Container: {
        alignItems: 'center',
        width: '87%',
        height: 84.5,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: "#ffff",
        borderRadius: 20,
        marginBottom:5,

    },
    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.2,
    },
    icon: {
        marginTop: 10,
        width: 20,
        height: 20,
        marginBottom: 10,

    },
    viewText: {
        color: '#126881',
        fontSize: 10,
        fontWeight: 'bold',
        lineHeight: 12.5,

    },
    viewtriangleContainer: {
        marginLeft: 260,

    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 28,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "white",
        marginTop: 30,
        marginRight:20,
       
    },

});