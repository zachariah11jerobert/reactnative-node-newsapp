import React from "react";
import { StyleSheet, View } from "react-native";

const ViewMore = (style) => {
  return (
    <View stye={[styles.container, style]}>
      <Text stye={styles.text}>View More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    height: 50,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a74e0",
  },
});

export default ViewMore;
