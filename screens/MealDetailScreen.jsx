import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  const steps = props.navigation.getParam("steps");
  const ingredients = props.navigation.getParam("ingredients");

  return (
    <View style={styles.screen}>
      <Text>The MealDetail Screen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("title");
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
