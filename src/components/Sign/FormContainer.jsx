import React from 'react';
import { createPortal } from "react-dom";
import Backdrop from '../Layout/UI/Backdrop/Backdrop';
import classes from './FormContainer.module.css';
import Login from './Login';
import Registration from './Registration';
import { useStore } from '../../Store/store';

const Formcontainer = () => {


    const [state, dispatch] = useStore()
    const { formState, isLoading } = state.backdrop
    
    return <>
        <Backdrop />

        {createPortal(
            <div className={classes.container}>
                <button className={` btn btn-warning btn-lg `} 
                    onClick={() => !isLoading && dispatch('CHANGE_BACKDROP_STATE', false)}>X</button>

                <div className={classes.buttonContainer}>
                    
                    <button className={`btn btn-outline-warning btn-lg ${classes.navigation}`} onClick={() => dispatch('CHANGE_FORM_STATE', false)}>Login</button>

                    <button className={`btn btn-outline-warning btn-lg ${classes.navigation}`} onClick={() => dispatch('CHANGE_FORM_STATE', true)}>Sign up</button>
                </div>

                {formState ? <Registration/> : <Login />}
            </div>,
            document.getElementById('overlay')
        )}

        
    </>
}

export default Formcontainer;

