import NonVegFoodData from "./NonVegFoodData";
import VegFoodData from "./VegFoodData";
import SweetsData from "./SweetsData";
// import Deserts from "./Deserts";
// import FastFood from "./FastFood";

const AllFoodData = [...NonVegFoodData, ...VegFoodData, ...SweetsData]

export default AllFoodData;