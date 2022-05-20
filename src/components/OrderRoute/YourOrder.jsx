import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import _ from 'lodash';

import classes from './YourOrder.module.css';
import Roundcard from '../Layout/UI/RoundCard/RoundCard';
import RoundCardData from '../Data/RoundCardData';
import Container from '../Layout/UI/Container/Container';

// import CardImgs from '../Data/FrontData';
// import OrderOnline from './OrderOnline';


const YourOrder = () => {

    const categoriesData = RoundCardData.map(data => {
        const tagName = _.kebabCase(_.lowerCase(data.title));


        return (
            
            <li key={data.id} className={classes.cardList}>  
                <NavLink to={`/your-orders/${tagName}`}> 
                    <Roundcard
                        src={data.src}>
                        {data.title}
                    </Roundcard>
                </NavLink>
            </li>
        )
    });

    return (
        <>
            <div className={` ${classes.navMask}`} />
            <div className={` container p-0 ${classes.container}`}>
                <h2 className={`ls-3 ${classes.categories} `}>Categories</h2>
                
                <Container>
                    {categoriesData}
                </Container>
                <hr />
                <Outlet />

            </div>
        </>
    );
}

export default YourOrder;
