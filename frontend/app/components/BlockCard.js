import React from "react";
import { StyleSheet, View,Image } from "react-native";
import SubTitle from "./Subtitle";
import Title from "./Title";

const BlockCard = ({ style, imageStyle, item }) => {
  const { thumbnail, title, desc } = item;
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <SubTitle>{desc}</SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
