
import freeDelivery from "../../../assets/background-img/Free-delivery.png";
import freshFood from "../../../assets/background-img/Food-fresh.png";
import discounts from "../../../assets/background-img/discounts.png";
import classes from "./MainSection.module.css";

const servicesArr = [
    {
        key: 1000000,
        freeDelivery: freeDelivery,
        service: 'Fast Delivery'
    },
    {
        key: 1000001,
        freeDelivery: freshFood,
        service: 'Fresh Food'
    },
    {
        key: 1000002,
        freeDelivery: discounts,
        service: 'Various discounts'
    },

]

const ServiceCard = () => {

    return servicesArr.map(service => {
        return <div key={service.key}
            className={classes.services}>
            <img className={classes.servicesImg}
                src={service.freeDelivery}
                alt="delivery" />
            <h2>{service.service}!</h2>
        </div>
    })
}

export default ServiceCard