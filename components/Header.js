import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={sytles.header}>
      <TitleText style={sytles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const sytles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
