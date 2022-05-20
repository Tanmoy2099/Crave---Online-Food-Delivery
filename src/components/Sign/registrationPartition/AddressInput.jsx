
import classes from '../Registration.module.css'
import { useStore } from '../../../Store/store'

const AddressInput = () => {
    const [{ registrationForm }, dispatch] = useStore()
    const { address, mystate, zip } = registrationForm

    const updateAddress = address => dispatch('UPDATE_ADDRESS', { value: address, isValid: (address !== '') })

    const updateState = myState => dispatch('UPDATE_STATE', { value: myState, isValid: (myState !== '') })

    const updateZip = zip => {
        const Zip = String(zip)
        dispatch('UPDATE_ZIP', { value: Zip, isValid: (Zip.length === 6) })
    }

    return <>
        {/*------------------------------Address------------------------------ */}
        <div className={`form-outline text-warning fs-4`}>

            <label htmlFor='address'>Address: </label>

            <input className={`form-control fs-4 `}
                type={`text`}
                id='address'
                autoComplete="on"
                placeholder='Enter your address'
                onBlur={() => dispatch('UPDATE_ADDRESS', { isTouched: true })}
                onChange={event => updateAddress(event.target.value)}
                value={address.value}
            />

            {!address.isValid && address.isTouched && <h5>Please Enter a valid Address</h5>}
        </div>
        <div className={`form-outline mb-1 text-warning ${classes.inputContainer}`}>

            {/* ------------------------------State------------------------------ */}
            <div className={`form-outline text-warning fs-4 ${classes.name}`}>
                <label htmlFor='state'>State: </label>

                <input className={`form-control fs-4 `}
                    type='text'
                    id='state'
                    autoComplete='on'
                    placeholder='Enter Your State'
                    onBlur={() => dispatch('UPDATE_STATE', { isTouched: true })}
                    onChange={event => updateState(event.target.value)}
                    value={mystate.value}
                />
                {!mystate.isValid && mystate.isTouched && <h5>Please enter your state.</h5>}
            </div>

            {/* ----------------------------Zip------------------------------ */}
            <div className={`form-outline text-warning fs-4 ${classes.name}`}>
                <label htmlFor='zipCode'>Zip Code: </label>

                <input className={`form-control fs-4 `}
                    type='number'
                    id='zipCode'
                    autoComplete="on"
                    placeholder='Enter Zip Code'
                    onBlur={() => dispatch('UPDATE_ZIP', { isTouched: true })}
                    onChange={event => updateZip(event.target.value)}
                    value={zip.value}
                />
                {!zip.isValid && zip.isTouched && <h5>Please enter Valid zipcode.</h5>}
            </div>
        </div>
    </>
}

export default AddressInput