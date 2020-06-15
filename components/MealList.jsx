import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              meal: itemData.item,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
