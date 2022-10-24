import React, { Component, useState } from "react";
import { View,StyleSheet, TextInput,Text } from "react-native";

const MemberScreen = () =>  {

  const [value,setValue] = useState('rfradsfdsf')

  return (
    <View style={styles.container}>
      <Text>MemberScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
export default MemberScreen;
