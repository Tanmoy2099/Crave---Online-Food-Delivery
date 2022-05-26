import { useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { useStore } from "../../../Store/store";
import classes from "./Navbar.module.css";

// import { auth } from '../../../firebase/firebase'

import { useAuth } from "../../../contexts/AuthContext";
import Formcontainer from '../../Sign/FormContainer';
import HeaderCartButton from './HeaderCartButton';
import CartContainer from "../Cart/CartContainer";

const Navbar = () => {

    // fetchFood('indian')

    const [{ backdrop, isLoggedIn }, dispatch] = useStore()
    const { backdropState, cartState } = backdrop

    const { currentUser, logOut, currentUserData } = useAuth()

    // console.log(isLoggedIn)


    const userId = currentUserData?.userId
    const Dp = currentUserData?.DisplayPicture
    const displayName = currentUser?.displayName

useEffect(() => {
    let unsub
    setTimeout(() => {
        unsub = loginHandler()
        dispatch('CHANGE_BACKDROP_STATE', false)
    }, 1000)
    return unsub
}, [])


    const loginHandler = () => {
        dispatch('CHANGE_BACKDROP_STATE', true)
        dispatch('CHANGE_FORM_STATE', false)
        
    }

    const SignUpHandler = () => {
        dispatch('CHANGE_BACKDROP_STATE', true)
        dispatch('CHANGE_FORM_STATE', true)
    }

    const LogoutHandler = async () => {
        try {
            await logOut()
        } catch (error) { console.log(error) }
        dispatch('LOGGED_IN_FALSE')
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

                    <NavLink to={`/user-profile/${userId}`} className={` ${classes.navigationSign}`} >

                        <input type="text" className={`${classes.dp}`} value={Dp ? Dp : ''} readOnly
                        /> <span className={classes.dpName}>  Hi, {displayName ? displayName : ''}</span>
                    </NavLink>

                    <p className={` ${classes.navigationSign}`} onClick={LogoutHandler}>Logout</p>
                </> : <>
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