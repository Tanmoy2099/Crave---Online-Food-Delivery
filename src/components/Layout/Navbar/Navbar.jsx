import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { useStore } from "../../../Store/store";
import classes from "./Navbar.module.css";

import { useAuth } from "../../../contexts/AuthContext";
import Formcontainer from '../../Sign/FormContainer';
import HeaderCartButton from './HeaderCartButton';
import CartContainer from "../Cart/CartContainer";

const Navbar = props => {

    // fetchFood('indian')

    const [{backdrop}, dispatch] = useStore()
    const { backdropState, cartState } = backdrop
    // const { isLoggedIn } = state

    const { currentUser, logOut, currentUserData, isLoggedIn } = useAuth()
    const userId = currentUserData?.userId 

    const loginHandler = () => {
        dispatch('CHANGE_BACKDROP_STATE', true)
        dispatch('CHANGE_FORM_STATE', false)
    }

    const SignUpHandler = () => {
        const boolean = true
        dispatch('CHANGE_BACKDROP_STATE', boolean)
        dispatch('CHANGE_FORM_STATE', boolean)
    }

    const LogoutHandler = async () => {
        try {
            await logOut()
        } catch (error) { console.log(error) }
    }
    const CartDomHandler = () => {
        dispatch('CHANGE_BACKDROP_STATE', true)
        dispatch('CHANGE_CART_STATE', true)
    }

    return <>
        {backdropState && !cartState && <Formcontainer />}
        {backdropState && cartState && <CartContainer />}

        <nav className={`container-fluid ${classes.header}`}>
            <NavLink to='/home' className={classes.title}>Crave</NavLink>
            <div className={classes.container}>

                {/* <NavLink to='/home' className={navData => navData.isActive ? `${classes.navigation} ${classes.home} ${classes.active}` : `${classes.home} ${classes.navigation}`}>Home</NavLink> */}

                {isLoggedIn ? <>

                    <NavLink to={`/user-profile/${userId}`} className={` ${classes.navigationSign}`} >Hi ! {currentUser?.displayName} </NavLink>
                    <p className={` ${classes.navigationSign}`} onClick={LogoutHandler}>Logout</p>
                </>
                    : <>
                        <p className={` ${classes.navigationSign}`} onClick={loginHandler}>Login</p>
                        <p className={` ${classes.navigationSign}`} onClick={SignUpHandler}>Sign up</p>
                    </>
                }

                <div className={classes.hideCart}>
                    <HeaderCartButton CartDomHandler={CartDomHandler} />
                </div>
            </div>
        </nav>
    </>
}
//  <NavLink to='/signup' className={navData => navData.isActive ? `${classes.navigation} ${classes.active}` : `${classes.navigation}`}>Sign up</NavLink>
export default Navbar