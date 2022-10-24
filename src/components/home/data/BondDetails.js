import React, { Component, useState } from "react";
import { View,StyleSheet, TextInput,Text } from "react-native";

const BondDetails = () =>  {
//使用Hooks技术添加value状态，并设置默认值
  const [value,setValue] = useState('rfradsfdsf')

  return (
    <View style={styles.container}>
      <Text>BondDetails</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
export default BondDetails;
