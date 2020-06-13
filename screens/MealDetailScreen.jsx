import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  const steps = props.navigation.getParam("steps");
  const ingredients = props.navigation.getParam("ingredients");

  console.log(steps);
  console.log(ingredients);

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
