
import { useStore } from '../../../Store/store'

const InputLoginEmail = () => {

    const [state, dispatch] = useStore()
    const { email } = state.loginForm
    const { signinError } = state.error


    const updateValues = value => {
        if (signinError) {
            dispatch('RESET_SIGNIN_ERROR')
        }
        const newLocal = new RegExp(/^[\w.! #$%&'*+/=? ^_`{|}~-]+@[\w].*[\w{2,3}]+$/)
        dispatch('LOGIN_EMAIL', {
            value: value,
            isValid: newLocal.test(value)
        })
        return
    }



    return (
        <div className={`form-outline mb-3 text-warning fs-3`}>

            <label className={`form-label `}
                htmlFor='registerEmail'>Email: </label>

            <input className={`form-control fs-3 mb-2 `}
                type={`email`}
                id='registerEmail'
                autoComplete="on"
                placeholder='Enter your email address'
                onBlur={() => dispatch('LOGIN_EMAIL', { isTouched: true })}

                onChange={event => updateValues(event.target.value)}
                value={email.value}
            />

            {!email.isValid && email.isTouched &&
                <h5>Please Enter a valid Enail Address</h5>
            }
        </div>
    )
}

export default InputLoginEmail