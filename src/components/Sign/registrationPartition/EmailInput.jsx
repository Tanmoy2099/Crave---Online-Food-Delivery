// import {useEffect} from 'react'
import { useStore } from '../../../Store/store'



function EmailInput() {

    const [state, dispatch] = useStore()
    const email = state.registrationForm.email
    const { signupError} = state.error

    const updateEmail = value => {
        if (signupError) {
            dispatch('RESET_SIGNUP_ERROR')
        }
        const newLocal = new RegExp(/^[\w.! #$%&'*+/=? ^_`{|}~-]+@[\w].*[\w{2,3}]+$/)
        dispatch('UPDATE_EMAIL', {
            value: value,
            isValid: newLocal.test(value)
        })
        return
    }

    return (
        <div className={`form-outline mb-1 text-warning fs-4`}>

            <label className={``} htmlFor='registerEmail'>Email: </label>

            <input className={`form-control fs-4 mb-2 `}
                type={`email`}
                id='registerEmail'
                autoComplete="on"
                placeholder='Enter your email address'
                onBlur={() => dispatch('UPDATE_EMAIL', { isTouched: true })}
                onChange={event => updateEmail(event.target.value)}
                value={email.value}
            />

            {!email.isValid && email.isTouched && <h5>Please Enter a valid Email Address</h5>}
        </div>
    )
}


export default EmailInput
