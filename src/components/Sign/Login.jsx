import classes from './Login.module.css'
import InputLoginEmail from './loginPartition/InputLoginEmail'
import InputLoginPassword from './loginPartition/InputLoginPassword'
import { useAuth } from '../../contexts/AuthContext'

import { useStore } from '../../Store/store'


const Login = () => {

    const [{ loginForm, error, backdrop }, dispatch] = useStore()

    const { email, password } = loginForm
    const { signinError } = error
    const { isLoading } = backdrop
    const tempValid = email.isValid && password.isValid

    const { logIn, isLoggedIn } = useAuth()



    async function loginHandler(e) {
        e.preventDefault()

        dispatch('IS_LOADING', true)
        try {
            await logIn(email.value, password.value)
        } catch (error) { 
            console.log(error) 
            dispatch('UPDATE_SIGNIN_ERROR', error.message)
            dispatch('IS_LOADING', false)

            return
        }
        dispatch('CHANGE_LOGIN_STATES')
        dispatch('IS_LOADING', false)

        setTimeout(() => {
            dispatch('CHANGE_BACKDROP_STATE', false)
        }, 700)
    }

    return <>{!isLoggedIn ?
        <div className="tab-content ">
            <div className="tab-pane fade show active fs-3" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form >
                {/*---------------- Error handle ---------------- */}
                    {(signinError.match(/user-not-found/)) && <h2 className={`${classes.error}`}>No user With this email Id, Goto Signup</h2> }
                    {(signinError.match(/wrong-password/)) && <h2 className={`${classes.error}`}>You have entered wrong password</h2> }
                    {/* ---------Details Input -------------- */}
                    <InputLoginEmail />
                    <InputLoginPassword />

                    {/* <!-- Submit button --> */}
                    {(!tempValid || signinError ) && <button className={`btn btn-warning my-3 w-100 fs-3 disabled`}>Sign in </button> }
                    {(tempValid && !signinError) && <button type="submit" disabled={isLoading} onClick={loginHandler} className={`btn btn-warning fs-3 btn-block my-2 w-100 `}>{isLoading ? `loading...` : `Sign in`} </button> }

                </form>
            </div>
        </div> :
        <h1 className={classes.success}>Successfully Logged in !</h1>
        }
    </>
};

export default Login;