import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./Components/MainScreen";

// 화면 전환하는 코드
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen // MainScreen컴포넌트(화면)을 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);
