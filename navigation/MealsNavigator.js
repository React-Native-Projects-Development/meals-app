import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

// Material Bottom Tab
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Platform, Text } from "react-native";

import Colors from "../constants/Colors";

const defaultStackNavigatorConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
};

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
    defaultNavigationOptions: defaultStackNavigatorConfig,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigatorConfig,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

// Bottom Tabs Navigator

// You can use a stack or any other navigator as a screen in this navigator

// Similar to createStackNavigator 1st arg: Tabs, 2nd arg: Config

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "#fff",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
          },
          activeTintColor: Colors.accentColor,
        },
      });

// This one is created to have the header on the Filters screen
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigatorConfig,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator); // here we wrap the root navigator, you will only have 1 root navigator.
