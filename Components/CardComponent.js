import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

/*
 * card component는 작성자의 프로필 영역
 * 메인 이미지 영역
 * 본문 영역으로 구성되어 있다.
 */
export default class CardComponent extends Component {
  render() {
    const { data } = this.props; // 피드 항목 데이터
    const { image } = JSON.parse(data.json_metadata); // json_metadata에서 이미지 url을 파싱
    return (
      <Card>
        {/* 작성자의 프로필 영역 */}
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: "https://steemitimages.com/u/${data.author}/avatar"
              }}
            />
            <Body>
              <Text>{data.author}</Text>
              <Text note>{new Date(data.created).toDateString()}</Text>
            </Body>
          </Left>
        </CardItem>
        {/* 메인 이미지 영역 */}
        {image && image.length ? (
          <CardItem cardBody>
            <Image
              source={{ uri: image[0] }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        ) : null}
        {/* <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://user-images.githubusercontent.com/3969643/51441420-b41f1c80-1d14-11e9-9f5d-af5cd3a6aaae.png"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem> */}
        <CardItem style={{ height: 20 }}>
          <Text>{data.active_votes.length} likes</Text>
        </CardItem>
        <CardItem>
          <Text style={{ fontWeight: "900" }}>{data.title}</Text>
        </CardItem>
        <CardItem>
          <Text>{data.body.replace(/\n/g, " ").slice(0, 200)}</Text>
        </CardItem>
        {/* 좋아요, 댓글, 공유버튼 영역 */}
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon
                name="ios-heart"
                style={{ color: "black", marginRight: 5 }}
              />
              <Text>{data.active_votes.length}</Text>
            </Button>
            <Button transparent>
              <Icon
                name="ios-chatbubbles"
                style={{ color: "black", marginRight: 5 }}
              />
              <Text>{data.children}</Text>
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
          <Right>
            <Text>{data.pending_payout_value}</Text>
          </Right>
        </CardItem>
        {/* 본문 내용 영역
        <CardItem>
          <Text>
            <Text style={{ fontWeight: "900" }}>Anpigon</Text>
            이번에는 리액트 네이티브(React Native)로 인스타그램 UI을 구현하는
            포스팅입니다. 다른 앱을 따라 만들어 보는 것은 굉장히 재미있습니다.
            구글에서 인스타그램 클론 코딩 강의를 찾아보니, 다른 개발자들이 올린
            동영상 강의를 몇 개 찾을 수 있었습니다.
          </Text>
        </CardItem> */}
      </Card>
    );
  }
}
