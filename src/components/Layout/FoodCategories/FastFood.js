
import Container from "../UI/Container/Container";
import fastFood from "../../Data/FoodData/fastFood";
import Ordercard from '../UI/OrderCard/OrderCard';

const FastFood = () => {

    const fastF = fastFood.map(fastfood => {

        return <Ordercard
            key={fastfood.id}
            id={fastfood.id}
            src={fastfood.src}
            title={fastfood.title}
            description={fastfood.description}
            price={fastfood.price} />
    })

    return (
        <Container>
            {fastF}
        </Container>
    )
}

export default FastFood;