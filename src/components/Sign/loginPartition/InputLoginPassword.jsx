
import { useStore } from '../../../Store/store'


const InputLoginPassword = () => {

    const [state, dispatch] = useStore()
    const { password } = state.loginForm

    const updateValues = value => {
        const newLocal = new RegExp(/[\w.! #$%@&'*+/=? ^_`{|}~-]{6,20}/)
        dispatch('LOGIN_PASSWORD', {
            value: value,
            isValid: newLocal.test(value)? true: false
        })
        return
    }

    return (
        <div className={`form-outline mb-3 text-warning fs-3`}>
            <label className={`form-label `}
                htmlFor='password'>Password: </label>

            <input className={`form-control fs-3 mb-2 `}
                type='password'
                id='password'
                autoComplete="on"
                placeholder='Enter your password'
                onBlur={() => dispatch('LOGIN_PASSWORD', { isTouched: true })}

                onChange={event => updateValues(event.target.value)}
                value={password.value}
            />
            {!password.isValid && password.isTouched &&
                <><h5>Password should contain special character.</h5>
                    <h5>Password should have more than 5 character</h5></>
            }
        </div>
    )
}

export default InputLoginPassword