import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {}}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  ); // -1 will be returned if the category is not part of the categoryIds if its 0 or greater than we know the catId of the meal is included in the categoryIds

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default CategoryMealScreen;
