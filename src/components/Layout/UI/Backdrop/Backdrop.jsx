import React from 'react';
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
import classes from './backdrop.module.css';
import { useStore } from '../../../../Store/store';


const Backdrop = () => {

    const [state, dispatch] = useStore()

    const closeBackdrop = () => {
        if (!state.backdrop.isLoading) {
            dispatch('CHANGE_BACKDROP_STATE', false)
            dispatch('CHANGE_CART_STATE', false)
        }
    }

    return ReactDOM.createPortal(
        <div className={classes.backdrop}
            onClick={closeBackdrop} />,
        document.getElementById('backdrop')
    )
};

export default Backdrop;


