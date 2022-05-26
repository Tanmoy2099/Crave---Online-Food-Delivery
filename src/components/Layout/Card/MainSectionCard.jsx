import { Link } from "react-router-dom";
import classes from "./MainSectionCard.module.css";
import _ from 'lodash';


const Card = (props) => {
    const formattedChildren = _.kebabCase(_.lowerCase(props.children))

    return <>
        <Link to={`/your-orders/${formattedChildren}`} style={{ textDecoration: 'none' }} >
            <div key={props.id} className={`card ${classes.cardContainer}`} >

                <img className={`card-img-top img-fluid ${classes.cardImg}`} src={props.src} alt="Card cap" draggable='false'/>

                <div className={` ${classes.Title}`}>
                    <p className={`card-title ${classes.cardTitle}`}>{props.children}
                    </p>
                </div>
            </div>
        </Link>
    </>
};

export default Card;


// d - flex justify - content - center align - items - center mt - 1