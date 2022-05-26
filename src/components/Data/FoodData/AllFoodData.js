import NonVegFoodData from "./NonVegFoodData";
import VegFoodData from "./VegFoodData";
import SweetsData from "./SweetsData";
import FastFood from "./fastFood";

const AllFoodData = [...NonVegFoodData, ...VegFoodData, ...FastFood, ...SweetsData]

export default AllFoodData