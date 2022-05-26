

// -------Hook error--- Need to Fix --------------

import { useStore } from '../../../Store/store'
import { useAuth } from '../../../contexts/AuthContext'

import SetUserData from '../../../contexts/SetUserData'

const Submitbutton = () => {

    const [{ registrationForm, backdrop, error }, dispatch] = useStore()
    const { firstName, lastName, email, password, confirm_password, address, mystate, zip, phone, news_letter_checked } = registrationForm
    const { isLoading } = backdrop
    const { signupError } = error

    // console.log(signupError)

    const ifFormValid = email.isValid &&
        password.isValid &&
        address.isValid &&
        mystate.isValid &&
        zip.isValid &&
        phone.isValid &&
        (password.value === confirm_password.value)

    const { signUp } = useAuth()


    async function registerHandler(event) {
        event.preventDefault()
        dispatch('IS_LOADING', true)

        try {
            await signUp(email.value, password.value, firstName.value)
            // dispatch('IS_LOADING', true)
        }
        catch (error) {
            console.log(error.message)
            dispatch('UPDATE_SIGNUP_ERROR', error.message)
            dispatch('IS_LOADING', false)
            return
        }
        dispatch('LOGGED_IN_TRUE')
            try {
                await SetUserData({ firstName, lastName, email, address, mystate, zip, phone, news_letter_checked })
            } catch (error) { console.log(error.message) }

        // setIsLoggedIn(true)

        dispatch('CHANGE_UPDATED_STATES')
        dispatch('IS_LOADING', false)

        setTimeout(() => {
            dispatch('CHANGE_BACKDROP_STATE', false)
        }, 800)
    }

    return <>
        {(!ifFormValid || signupError) && <button className={`btn btn-warning my-3 w-100 fs-3 disabled `}>Register</button>}

        {(ifFormValid && !signupError) && <button type="submit" disabled={isLoading} onClick={registerHandler} className={`btn btn-warning my-3 w-100 fs-3 `}>{isLoading ? `loading...` : `Register`} </button>}
    </>
}

export default Submitbutton
