import React, { useEffect, useRef } from 'react'
import Ordercard from '../UI/OrderCard/OrderCard';

const RenderCard = ({props}) => {
    // console.log(props);
    const ifChanged = useRef(props)
    
    const checkChange = (card) => {
        return <Ordercard
            key={card.id}
            id={card.id}
            src={card.src}
            title={card.title}
            description={card.description}
            price={card.price} />
    }

    useEffect(() => {
        // ifChanged.current = checkChange(props)
        console.log(ifChanged.current.props);

        
    }, [props])

    return ifChanged.current
}

export default RenderCard

