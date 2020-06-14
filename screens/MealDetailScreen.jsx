import React from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
);

const MealDetailScreen = (props) => {
  const steps = props.navigation.getParam("steps");
  const ingredients = props.navigation.getParam("ingredients");
  const duration = props.navigation.getParam("duration");
  const complexity = props.navigation.getParam("complexity");
  const affordability = props.navigation.getParam("affordability");
  const image = props.navigation.getParam("image");

  return (
    <ScrollView>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{duration}m</DefaultText>
        <DefaultText>{complexity.toUpperCase()}</DefaultText>
        <DefaultText>{affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("title");
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Marked as Favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
