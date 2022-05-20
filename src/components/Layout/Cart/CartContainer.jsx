import React from 'react'
import { createPortal } from "react-dom";
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './CartContainer.module.css';
import CartItem from './CartItem';
import { memo } from 'react';
import { useStore } from '../../../Store/store';

const CartContainer = () => {


    const dispatch = useStore()[1]

    const closeCart = () => {
        dispatch('CHANGE_BACKDROP_STATE', false);
        dispatch('CHANGE_CART_STATE', false);
    }

    return <>
        <Backdrop />

        {createPortal(
                <div className={classes.container}>
                    <button className={` btn btn-warning btn-lg `} onClick={closeCart}>X</button>
                    <hr style={{ border: "1px solid #ffc107" }} />
                    <CartItem />
                </div>,
            document.getElementById('overlay')
        )}
    </>
}

export default memo(CartContainer);