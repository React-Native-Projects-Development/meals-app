import React from "react";

import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          title="Menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;
