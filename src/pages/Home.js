import React, { Component, useEffect, useState } from "react";
import { View,StyleSheet, TextInput,Text } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = () =>  {
//使用Hooks技术添加value状态，并设置默认值
  const [value,setValue] = useState('rfradsfdsf')

  const count = useSelector((state)=>state.commonReducer.value)


  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
export default HomeScreen;
