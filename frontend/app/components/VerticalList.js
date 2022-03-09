import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title";
import VerticalCard from "./VerticalCard";

const VerticalList = ({ title, data }) => {
  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.container}>
        {data.map((item) => (
          <VerticalCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});
export default VerticalList;
