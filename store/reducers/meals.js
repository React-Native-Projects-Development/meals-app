import { MEALS } from "../../data/dummy-data";

const initialMealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const meals = (state = initialMealsState, action) => {
  return state;
};

export default mealsReducer;
