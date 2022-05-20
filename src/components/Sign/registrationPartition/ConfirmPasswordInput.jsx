
import classes from '../Registration.module.css';
import { useStore } from '../../../Store/store';


function ConfirmPasswordInput() {

    const [state, dispatch] = useStore()
    const confirm_password = state.registrationForm.confirm_password;
    const password = state.registrationForm.password;
    const confirm_password_ifValid = (password.value === confirm_password.value)

    const updateValues = props => {
        let newLocal = String(props)
        dispatch('UPDATE_PASSWORD_CONFIRMATION', { value: newLocal })
    }
    return (
        <div className={`form-outline mb-1 text-warning fs-4 ${classes.name}`}>
            <label className={` `} htmlFor='confirmPassword'>Confirm Password: </label>

            <input className={`form-control fs-4 mb-1`}
                type='password'
                id='confirmPassword'
                autoComplete="off"
                placeholder='Confirm password'
                onBlur={() => dispatch('UPDATE_PASSWORD_CONFIRMATION', { isTouched: true })}
                onChange={event => updateValues(event.target.value)}
                value={confirm_password.value}
            />
            {!confirm_password_ifValid && confirm_password.isTouched && <h5>Please enter the same password</h5>}
        </div>
    )
}

export default ConfirmPasswordInput