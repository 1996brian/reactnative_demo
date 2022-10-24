import React, { Component, useState } from "react";
import { View,StyleSheet, TextInput,Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/Home";
import Icon from "react-native-vector-icons/FontAwesome";
import NewsFlash from "../components/home/index/NewsFlash";
import Questions from "../components/home/index/Questions";
import MainChart from "../components/home/data/MainChart";
import BondDetails from "../components/home/data/BondDetails";
import BuyMember from "../components/home/member/BuyMember";
import DataScreen from "../pages/Data";
import MemberScreen from "../pages/Member";
import SetScreen from "../pages/Set";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeRouter = () =>  {


  return (
    <Tab.Navigator
      initialRouteName={"index"}
      screenOptions={{
        tabBarActiveTintColor: "#2eb1f5",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name='index'
        component={IndexNavigator}
        options={{
          title: "首页",
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (<Icon name={"github-alt"} size={size} color={color} />),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="data"
        component={DataNavigator}
        options={
          {
            title: "数据",
            tabBarIcon: ({ color, size }) => (<Icon name={"android"} size={size} color={color} />),
            headerShown: false
          }
        }
      />
      <Tab.Screen
        name="member"
        component={MemberNavigator}
        options={{
          title: "会员",
          tabBarIcon: ({ color, size }) => (<Icon name={"apple"} size={size} color={color} />),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingsScreenNavigator}
        options={{
          title: "设置",
          tabBarIcon: ({ color, size }) => (<Icon name={"windows"} size={size} color={color} />),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

const IndexNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="home_index"
    >
      <Stack.Screen
        name='home_index'
        component={HomeScreen}
        options={{
          headerTitle: '首页',
          headerLeft: null,
          headerTitleAlign: "left",
          headerShown: false
        }}/>
      <Stack.Screen
        name='news-flash'
        component={NewsFlash}
        options={
          {
            headerTitle: '7*24',
            headerLeft: null,
            headerTitleAlign: "left",
          }
        }
      />
      <Stack.Screen
        name='question'
        component={Questions}
        options={
          {
            headerTitle: '问答',
            headerLeft: null,
            headerTitleAlign: "left",
          }
        }
      />
    </Stack.Navigator>
  )
}

const DataNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="showData"
    >
      <Stack.Screen
        name='showData'
        component={DataScreen}
        options={{
          headerTitle: '数据',
          headerLeft: null,
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name='bondDetails'
        component={BondDetails}
        options={({route, navigation}) => ({
          title: route.params.screenName,
        })}
      />
      <Stack.Screen
        name='buy_member'
        component={BuyMember}
        options={{
          headerTitle: '购买会员',
          headerLeft: null,
          headerTitleAlign: "left",
          // headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const MemberNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="memberScreen"
    >
      <Stack.Screen
        name='memberScreen'
        component={MemberScreen}
        options={{
          headerTitle: '会员',
          headerLeft: null,
          headerTitleAlign: "left",
        }}
      />
    </Stack.Navigator>
  )
}

const SettingsScreenNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="setScreen"
    >
      <Stack.Screen
        name='setScreen'
        component={SetScreen}
        options={{
          headerTitle: '设置',
          headerLeft: null,
          headerTitleAlign: "left",
        }}
      />
    </Stack.Navigator>
  )
}


export default HomeRouter;
