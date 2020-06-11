import React from "react";

import { StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  // When Using CategoriesScreen on our react navigation component these components get a special prop
  // console.log(props);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

// In JS Functions are objects therefore we can add properties to them

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;
