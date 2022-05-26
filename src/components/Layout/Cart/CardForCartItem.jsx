import classes from './CardForCartItem.module.css';
import { memo } from 'react';

const CardForCartItem = ({ src, title, quantity, price, ItemHandler}) => {


    return <div  className={classes['cart-item']}>
        <div className={classes.dataContainer}>
            <img className={classes.img} src={src} alt={title} />

            <div className={classes.priceContainer}>
                <h2>{title}</h2>
                <>
                    {/* <span className={classes.price}>{quantity}</span> */}
                    <span className={classes.amount}> {quantity} x {price}</span>
                    <span className={classes.amount}>= {`${quantity * price}`} rs</span>
                </>
            </div>

        </div>
        <div className={classes.buttonContainer}>
            <button className={`btn btn-warning btn-lg fs-1 `} onClick={()=>ItemHandler(false)}>{`<`}</button>

            <button className={`btn btn-warning btn-lg fs-1 `} onClick={()=>ItemHandler(true)}>{`>`}</button>
        </div>
    </div>
}

export default memo(CardForCartItem);