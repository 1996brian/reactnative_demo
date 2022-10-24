import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../pages/Login";
import HomeRouter from "./HomeRouter";

const Stack = createNativeStackNavigator();
const EntryRouter = () => {

  return (
    <Stack.Navigator initialRouteName="TabNav">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: '登录', headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={HomeRouter}
        options={{title: '首页', headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default EntryRouter;
