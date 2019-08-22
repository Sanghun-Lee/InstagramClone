import React, { Component } from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
import { Icon } from "native-base";

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

// 탭에 아이콘을 넣기 위해선 각 파일에 navigationOptions을 넣어야 한다.
// 스와이프와 애니메이션을 넣기 위해선 createBottomTabNavigator >> createMaterialTopTabNavigator를 사용해야 한다.
const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: "white"
      },
      iconStyle: { height: 30 },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <AppTabContainer />; // AppTabContainer 컴포넌트를 리턴한다.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
