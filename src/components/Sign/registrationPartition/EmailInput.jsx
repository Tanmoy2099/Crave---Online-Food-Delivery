// import {useEffect} from 'react'
import { useStore } from '../../../Store/store'
import classes from '../Registration.module.css'


function EmailInput() {

    const [{ registrationForm, error }, dispatch] = useStore()
    const { email, phone } = registrationForm
    const { signupError } = error

    const updateEmail = value => {
        if (signupError) {
            dispatch('RESET_SIGNUP_ERROR')
        }
        const newLocal = new RegExp(/^[\w.! #$%&'*+/=? ^_`{|}~-]+@[\w].*[\w{2,3}]+$/)
        const isValid= newLocal.test(value)
        dispatch('UPDATE_EMAIL', {
            value,
            isValid
        })
        return
    }

    const updatePhone = value => {
        const newLocal = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
        const isValid = newLocal.test(value)
        dispatch('UPDATE_PHONE_NUMBER', {
            value,
            isValid
        })
        return
    }

    return (
        <div className={`form-outline text-warning fs-3 ${classes.inputContainer}`}>
            <div className={`form-outline mb-1 text-warning fs-4 ${classes.name}`}>

                <label className={``} htmlFor='registerEmail'>Email*: </label>

                <input className={`form-control fs-4 mb-2 `}
                    type='email'
                    id='registerEmail'
                    autoComplete='on'
                    placeholder='Enter your email address'
                    onBlur={() => dispatch('UPDATE_EMAIL', { isTouched: true })}
                    onChange={event => updateEmail(event.target.value)}
                    value={email.value}
                />

                {!email.isValid && email.isTouched && <h5>Please Enter a valid Email Address</h5>}
            </div>

            <div className={`form-outline mb-1 text-warning fs-4 ${classes.name}`}>

                <label className={``} htmlFor='phoneNumber'>Phone Number*: </label>

                <input className={`form-control fs-4 mb-2 `}
                    type='number'
                    id='phoneNumber'
                    autoComplete='on'
                    placeholder='Enter your phone number'
                    onBlur={() => dispatch('UPDATE_PHONE_NUMBER', { isTouched: true })}
                    onChange={event => updatePhone(event.target.value)}
                    value={phone.value}
                />

                {!phone.isValid && phone.isTouched && <h5>Please Enter a valid Phone number</h5>}
            </div>

        </div>
    )
}


export default EmailInput
