import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";
import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  // feeds변수 선언
  state = {
    feeds: [],
    followings: []
  };

  // 컴포넌트가 마운트 되기 전에 피드를 가져오자
  componentWillMount() {
    this.fetchFeeds().then(feeds => {
      this.setState({
        feeds
      });
    });

    this.fetchFollowing().then(followings => {
      this.setState({
        followings
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

  fetchFollowing() {
    const data = {
      id: 2,
      jsonrpc: "2.0",
      method: "call",
      params: ["follow_api", "get_following", ["anpigon", "", "blog", 10]]
    };
    return fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => res.result.map(({ following }) => following));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>Instagram</Text>
          </Body>
          <Right>
            <Icon name="ios-send" style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          {/* 스토리 헤더 시작 */}
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}>Watch All</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5
              }}
            >
              {this.state.followings.map(following => (
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "pink",
                    borderWidth: 2
                  }}
                  source={{
                    uri: `https://steemitimages.com/u/${following}/avatar`
                  }}
                />
              ))}
            </ScrollView>
          </View>
          {/* 스토리 헤더 끝 */}
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
