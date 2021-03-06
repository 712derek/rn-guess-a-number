import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...sytles.headerBase,
        ...Platform.select({
          ios: sytles.headerIOS,
          android: sytles.headerAndroid,
        }),
      }}
    >
      <TitleText style={sytles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const sytles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});

export default Header;
