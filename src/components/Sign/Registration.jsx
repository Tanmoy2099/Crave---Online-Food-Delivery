import classes from './Registration.module.css'

import ConfirmPasswordInput from './registrationPartition/ConfirmPasswordInput'
import NewsletterCheckbox from './registrationPartition/NewsletterCheckbox'
import PasswordInput from './registrationPartition/PasswordInput'
import Submitbutton from './registrationPartition/Submitbutton'
import AddressInput from './registrationPartition/AddressInput'
import EmailInput from './registrationPartition/EmailInput'
import NameInput from './registrationPartition/NameInput'
import { useStore } from '../../Store/store'
// import { useAuth } from '../../contexts/AuthContext'

function Registration() {
    const { error, isLoggedIn } = useStore()[0]
    const { signupError } = error

    

    return <>
        {!isLoggedIn ?
            <form>
            <div className={classes.regContainer}>
                {/* ----------------Fullname-----Email------------- */}
                {signupError &&
                    <h2 className={`${classes.error}`}>Email id already registered, Goto Sign in</h2>
                }
                <NameInput />
                <EmailInput />
                <AddressInput />

                {/* ---------------password----------------- */}
                <div className={`form-outline text-warning fs-3 ${classes.inputContainer}`}>
                    <PasswordInput />
                    <ConfirmPasswordInput />
                </div>
                <NewsletterCheckbox />
                </div>
                <Submitbutton />
            </form>
        :<>
            <h1 className={classes.success}>Registered Successfully !</h1>
                <h1 className={classes.success}>Verification email is sent, kindly varify your email !</h1>
        
        </>
        }
    </>
}

export default Registration