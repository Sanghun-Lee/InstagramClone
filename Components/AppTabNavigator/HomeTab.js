import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content, Card } from "native-base";
import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  // feeds변수 선언
  state = {
    feeds: []
  };

  // 컴포넌트가 마운트 되기 전에 피드를 가져오자
  componentWillMount() {
    this.fetchFeeds().then(feeds => {
      this.setState({
        feeds
      });
    });
  }

  // 스팀잇 서버에서 데이터를 가져와서 화면에 출력해 보자.
  fetchFeeds() {
    const data = {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: "kr", limit: 20 }]
      ]
    };
    return fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => res.result);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {/* <CardComponent /> 이는 CardComponent에 있는 하나의 카드를 보여준다.*/}
          {this.state.feeds.map(feed => (
            <CardComponent data={feed} />
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
