import React, { Component, useEffect, useState } from "react";
import { View,StyleSheet, TextInput,Text } from "react-native";
import { useSelector } from "react-redux";

const DataScreen = () =>  {

  const [value,setValue] = useState('rfradsfdsf')
  const count = useSelector((state)=>state.commonReducer.value)


  return (
    <View style={styles.container}>
      <Text>DataScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
export default DataScreen;
