import classes from './Registration.module.css'

import ConfirmPasswordInput from './registrationPartition/ConfirmPasswordInput'
import NewsletterCheckbox from './registrationPartition/NewsletterCheckbox'
import PasswordInput from './registrationPartition/PasswordInput'
import Submitbutton from './registrationPartition/Submitbutton'
import AddressInput from './registrationPartition/AddressInput'
import EmailInput from './registrationPartition/EmailInput'
import NameInput from './registrationPartition/NameInput'
import { useStore } from '../../Store/store'


function Registration() {
    const { isLoggedIn, error } = useStore()[0]
    const { signupError } = error

    return <>
        {!isLoggedIn &&
            <form >
                {/* ----------------Fullname-----Email------------- */}
                {signupError &&
                    <h2 className={`${classes.error}`}>Email id already registered, Goto Sign in</h2>
                }
                <NameInput />
                <EmailInput />

                {/* ---------------password----------------- */}
                <AddressInput />

                <div className={`form-outline text-warning fs-3 ${classes.inputContainer}`}>
                    <PasswordInput />
                    <ConfirmPasswordInput />
                </div>
                <NewsletterCheckbox />
                <Submitbutton />
            </form>}
        {isLoggedIn &&
            <h1 className={classes.success}>Registered Successfully !</h1>
        }
    </>
}

export default Registration