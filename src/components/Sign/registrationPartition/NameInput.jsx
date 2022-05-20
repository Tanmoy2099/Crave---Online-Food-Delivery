
import classes from '../Registration.module.css'
import { useStore } from '../../../Store/store'

const NameInput = () => {
    const [{ registrationForm }, dispatch] = useStore()
    const { firstName, lastName } = registrationForm

    const updateFirstName = fname => dispatch('UPDATE_FIRST_NAME', { value: fname, isValid: (fname !== '') })
    const updateLastName = lname => dispatch('UPDATE_LAST_NAME', { value: lname, isValid: (lname !== '') })

    return <>
        <div className={`form-outline text-warning fs-3 ${classes.inputContainer}`}>

            {/* ------------------------------First Name------------------------------ */}
            <div className={`form-outline mb-1 text-warning fs-4 ${classes.name}`}>
                <label className={``} htmlFor='firstName'>First Name: </label>

                <input className={`form-control fs-4 `}
                    type='text'
                    id='firstName'
                    autoComplete="on"
                    placeholder='Enter your Firstname'
                    onBlur={() => dispatch('UPDATE_FIRST_NAME', { isTouched: true })}
                    onChange={event => updateFirstName(event.target.value)}
                    value={firstName.value}
                />
                {!firstName.isValid && firstName.isTouched && <h5>Please enter your first name.</h5>}
            </div>

            {/* ----------------------------Last Name------------------------------ */}
            <div className={`form-outline mb-1 text-warning fs-4 ${classes.name}`}>
                <label className={``} htmlFor='lastName'>Last Name: </label>

                <input className={`form-control fs-4 `}
                    type='text'
                    id='lastName'
                    autoComplete="on"
                    placeholder='Enter your Lastname'
                    onBlur={() => dispatch('UPDATE_LAST_NAME', { isTouched: true })}
                    onChange={event => updateLastName(event.target.value)}
                    value={lastName.value}
                />
                {!lastName.isValid && lastName.isTouched && <h5>Please enter your last name.</h5>}
            </div>
        </div>
    </>
}

export default NameInput