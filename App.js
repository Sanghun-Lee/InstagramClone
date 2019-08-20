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

/*
  * 리액트 네이티브 인스타그램 UI 클론코딩
  * 블로그 : https://velog.io/@anpigon/React-Native-UI-%EB%A7%8C%EB%93%A4%EA%B8%B0-1
  * 사용되는 컴포넌트
  ! yarn add native-base @expo/vector-icons
  ! yarn add react-navigation
  ! npm install
*/
