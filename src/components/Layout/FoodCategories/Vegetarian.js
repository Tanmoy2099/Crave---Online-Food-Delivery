import React from 'react'
import Container from "../UI/Container/Container";
import VegFoodData from "../../Data/FoodData/VegFoodData";
import Ordercard from '../UI/OrderCard/OrderCard';

const Vegetarian = () => {

    const VegFood = VegFoodData.map(Veg => {
        return <Ordercard
            key={Veg.id}
            id={Veg.id}
            src={Veg.src}
            title={Veg.title}
            description={Veg.description}
            price={Veg.price} />
    })

    return (
        <Container>
            {VegFood}
        </Container>
    )
}

export default Vegetarian;