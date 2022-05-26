// import { useEffect, useRef } from "react"
import classes from "./MainSection.module.css"
import Card from "../Card/MainSectionCard"
import RoundCardData from '../../Data/RoundCardData'
import Container from "../UI/Container/Container"
import Ordercard from '../UI/OrderCard/OrderCard'
import FoodAdv from "./FoodAdv"

import AllFoodData from "../../Data/FoodData/AllFoodData"
// import RenderCard from "./renderCard"
import ServiceCard from "./ServiceCard"

const MainSection = () => {

    const cards = RoundCardData.map(cardimg => {
        if (cardimg.title === 'All Category') { return null }
        return <Card
            key={cardimg.id}
            id={cardimg.id}
            src={cardimg.src}>{cardimg.title}
        </Card>
    })

    const FevoriteOfAll = AllFoodData.slice(0, 4)

    // let shuffled = []
    // useEffect(() => {
    // shuffled = AllFoodData.sort(() => 0.5 - Math.random())

    // }, [shuffled])
    // const FevoriteOfAll = shuffled.slice(0, 4)

    //     const set = new Set()
    //     const random = () => Math.floor(Math.random() * (AllFoodData.length));
    // for (let i = 0; i < 4; i++) {
    //     set.add(AllFoodData[random()])
    // }
    // return random
    // FevoriteOfAll = [...set]



    const YourFevoriteFood = FevoriteOfAll.map(allFood => {
        return <Ordercard
            key={allFood.id}
            id={allFood.id}
            src={allFood.src}
            title={allFood.title}
            description={allFood.description}
            price={allFood.price} />
    })

    return <>
        <Container> {cards} </Container>

        <FoodAdv />
        <div className={classes.frontContainer}>
            <div className={`container`}> 
            <h2 className={`ls-3 ${classes.categories} `}>DEAL OF THE DAY!</h2>
            </div>
            <div>
                <Container>
                    {YourFevoriteFood}
                </Container>
            </div>
            <div className={classes.servicesContainer}> <ServiceCard />
            </div>
        </div>
    </>
}


export default MainSection
