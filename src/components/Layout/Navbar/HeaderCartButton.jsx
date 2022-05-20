
import { useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useStore } from '../../../Store/store';

const HeaderCartButton = ({ CartDomHandler }) => {

    const state = useStore()[0];

    // console.log(state.cart);

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const { items, totalAmount } = state.cart;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        curNumber += item.quantity
        return curNumber
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <>
        <button className={btnClasses} onClick={CartDomHandler}>
            <span className={classes.icon}><CartIcon /> </span>
            <span className={classes.mobileView}>items =</span>
            <span className={classes.badge}> {numberOfCartItems} </span>
            <span className={classes.mobileView}> total = {totalAmount} Rs</span>
        </button>

        {/* <button className={`btn btn-warning w-100 h-40 fs-3 ${classes.cartButton}`}>{`total: ${totalAmount}`}</button> */}
    </>

};

export default HeaderCartButton;