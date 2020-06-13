import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

// Stack Navigator

// createStackNavigator(first arg: screens, second arg: configuration for navigation)
const MealsNavigator = createStackNavigator(
  {
    // returns a navigation container (React Component)
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen, // longer form, here we can also specify default properties for this screen
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
    },
  }
);

// Bottom Tabs Navigator

// You can use a stack or any other navigator as a screen in this navigator

// Similar to createStackNavigator 1st arg: Tabs, 2nd arg: Config

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator); // here we wrap the root navigator, you will only have 1 root navigator.
