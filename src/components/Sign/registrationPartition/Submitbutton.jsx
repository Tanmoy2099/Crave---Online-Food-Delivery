
import { useStore } from '../../../Store/store'
import { useAuth } from '../../../contexts/AuthContext'

const Submitbutton = () => {
    const [{ registrationForm, backdrop, error }, dispatch] = useStore()
    const { email, password, confirm_password, address, mystate, zip } = registrationForm
    const { isLoading } = backdrop
    const { signupError } = error

    // console.log(signupError)

    const ifFormValid = email.isValid && password.isValid && address.isValid && mystate.isValid && zip.isValid && (password.value === confirm_password.value)
    const { signUp, setUserData } = useAuth()

    async function registerHandler(event) {
        event.preventDefault()
        dispatch('IS_LOADING', true)

        try { 
            await signUp(email.value, password.value) 
            dispatch('IS_LOADING', true)
        }
        catch (error) {
            dispatch('UPDATE_SIGNUP_ERROR', error.message)
            dispatch('IS_LOADING', false)
            return
        }

        try { await setUserData() }
        catch (error) { console.log(error) }

        dispatch('CHANGE_UPDATED_STATES')
        dispatch('IS_LOADING', false)
        dispatch('LOGGED_IN_SUCCESSFULLY')

        setTimeout(() => {
            dispatch('CHANGE_BACKDROP_STATE', false)
        }, 700)
    }

    return <>
        {(!ifFormValid || signupError) && <button className={`btn btn-warning my-3 w-100 fs-3 disabled `}>Register</button>}

        {(ifFormValid && !signupError) && <button type="submit" disabled={isLoading} onClick={registerHandler} className={`btn btn-warning my-3 w-100 fs-3 `}>{isLoading ? `loading...` : `Register`} </button>}
    </>
}

export default Submitbutton