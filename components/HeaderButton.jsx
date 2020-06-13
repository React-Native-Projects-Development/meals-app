import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { Platform } from "react-native";

const CustomHeaderButton = (props) => {
  // always forward all the props in HeaderButton. main step.
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "#fff" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
