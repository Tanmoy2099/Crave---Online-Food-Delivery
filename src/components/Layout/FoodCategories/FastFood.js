
import Container from "../UI/Container/Container";
import NonVegFoodData from "../../Data/FoodData/NonVegFoodData";
import Ordercard from '../UI/OrderCard/OrderCard';

const FastFood = () => {

    const NonVegFood = NonVegFoodData.map(nonVeg => {
        
        return <Ordercard
            key={nonVeg.id}
            id={nonVeg.id}
            src={nonVeg.src}
            title={nonVeg.title}
            description={nonVeg.description}
            price={nonVeg.price} />
    })

    return (
        <Container>
            {NonVegFood}
        </Container>
    )
}

export default FastFood;