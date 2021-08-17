import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { postForm } from '../../store/actions/Postform'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';

export default DetailScreen = ({ navigation, route }) => {

  const data = route?.params?.item ?? {}

  const dispatch = useDispatch()
  useEffect(() => {
  }, [])
  _post = () => {
    dispatch(postForm(route?.params?.item))
  }
  let dataMap = [];


  Object.keys(data).forEach((key) => {
    console.log(key)
    dataMap.push(data[key]);
  })
  console.log(dataMap)
  this.state = {
    tableHead: ['name', 'CMND', 'phone', 'address', 'address1', 'level', 'level1', 'level2'],

    tableData: [dataMap]
  }

  return (
    <View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>information</DataTable.Title>

          <DataTable.Title numeric>details</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Name</DataTable.Cell>

          <DataTable.Cell numeric>{data.name}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>CMND</DataTable.Cell>

          <DataTable.Cell numeric>{data.CMND}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Phone</DataTable.Cell>

          <DataTable.Cell numeric>{data.phone}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>address</DataTable.Cell>

          <DataTable.Cell numeric>{data.address}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>address</DataTable.Cell>

          <DataTable.Cell numeric>{data.address1}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Chon Thu Nhap</DataTable.Cell>

          <DataTable.Cell numeric>{data.level}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>chon chuc vu</DataTable.Cell>

          <DataTable.Cell numeric>{data.level1}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ban co muc nao</DataTable.Cell>

          <DataTable.Cell numeric>{data.level2}</DataTable.Cell>
        </DataTable.Row>


      </DataTable>



      <TouchableOpacity
        style={styles.btnPost}
        onPress={_post}
      >
        <Text>POST</Text>
      </TouchableOpacity>
    </View>
    // <View>

    //     <Text>{data.name}</Text>
    //     <Text>{data.CMND}</Text> 
    //     <Text>{data.phone}</Text>
    //     <Text>{data.address}</Text>
    //     <Text>{data.address}</Text>
    //     <Text>{data.address1}</Text>
    //     <Text>{data.level}</Text>
    //     <Text>{data.level1}</Text>
    //     <Text>{data.level2}</Text>






  )
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'column' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 110 },
  text: { textAlign: 'left' },
  btnPost: {
    alignItems: "center",
    backgroundColor: "#459FD7",
    padding: 10,
    marginTop: 10,
    width: 100,
    marginLeft: 12

  }
});
