import classes from './Footer.module.css';
import { useStore } from "../../../Store/store";
import HeaderCartButton from '../Navbar/HeaderCartButton';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const [ state, dispatch ] = useStore()

    const items = state.cart.items;

    const CartDomHandler = () => {

        dispatch('CHANGE_BACKDROP_STATE', true)
        dispatch('CHANGE_CART_STATE', true)
    }

    return <>
        <footer className={`container-fluid ${classes.Footer}`}>
            <div className={classes.footerDetails}>

                <div className={`d-flex flex-row ${classes.about}`}>
                    <ul className={classes.info}>
                        <h3>ABOUT ME</h3>
                        <li>My Portfolio</li>
                        <li>My Github</li>
                        <li>Contact</li>
                    </ul>

                    <ul className={classes.info}>
                        <h3>FOR FOODIES</h3>
                        <li>Community</li>
                        <li>Developer</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className={classes.newsletter}>
                    <h4>SUBSCRIBE TO GET DAILY DISCOUNTS!</h4>
                    <form className={classes.newsletterForm} action="#" method="Post">
                        <input className={classes.newsletterInput} type="text" name="text" placeholder="  Enter Your Email Id" />
                        <button type="button" className={`btn btn-outline-warning ${classes.button}`}>Subscribe</button>
                    </form>
                    <p>Register now to get updates on <span> Offers and Coupons</span></p>
                </div>
            </div>



            <div className={classes.bottomFooter}>
                <h4>Copyright &copy; 2020 - {year} All Rights reserved. </h4>
                <h5>made with ❤ by <span>Tanmoy Nath</span> </h5>
            </div>
        </footer>
        {items.length && <div className={` ${classes.cartButtonContainer}`}>

            <p style={{ color: 'white', fontSize: '1.5rem' }}>Add foods to your cart</p>

            <HeaderCartButton CartDomHandler={CartDomHandler}  />
        </div>}
    </>
}

export default Footer;