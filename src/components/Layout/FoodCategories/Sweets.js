import React from 'react';
import Container from '../UI/Container/Container';
import Ordercard from '../UI/OrderCard/OrderCard';
import SweetsData from '../../Data/FoodData/SweetsData';

const BengaliSweets = () => {

    const renderSweetsCards = SweetsData.map(sweets => {
        return <Ordercard 
        key={sweets.id} 
        id={sweets.id} 
        src={sweets.src} 
        title={sweets.title} 
        description={sweets.description} 
        price={sweets.price}/>
    })

    return (
        <Container>
            {renderSweetsCards}
        </Container>
    );
}

export default BengaliSweets;
