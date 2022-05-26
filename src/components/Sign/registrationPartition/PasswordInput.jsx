import classes from '../Registration.module.css';
import { useStore } from '../../../Store/store';

function PasswordInput() {
    const [state, dispatch] = useStore()
    const {password} = state.registrationForm;


    const updateValues = props => {
        const newLocal = new RegExp(/[\w.! #$%@&'*+/=? ^_`{|}~-]{6,20}/)
        dispatch('UPDATE_PASSWORD', {
            value: String(props),
            isValid: newLocal.test(props)? true : false
        })
    }

    return (
        <div className={`form-outline text-warning fs-4 ${classes.name}`}>
            <label className={``} htmlFor='password'>Password*: </label>

            <input className={`form-control fs-4 mb-2 `}
                type='password'
                id='password'
                autoComplete="on"
                placeholder='Enter your password'
                onBlur={() => dispatch('UPDATE_PASSWORD', { isTouched: true })}

                onChange={event => updateValues(event.target.value)}
                value={password.value}
            />
            {!password.isValid && password.isTouched &&
                <>
                    <h5>Password should contain special character.</h5>
                    <h5>Password should have more than 5 character</h5>
                </>
            }
        </div>
    )
}

export default PasswordInput