import React from 'react'
import { useStore } from '../../../Store/store'
// import classes from '../Registration.module.css'


function NewsletterCheckbox() {
    const [{ registrationForm }, dispatch] = useStore()
    const { news_letter_checked } = registrationForm;

    const updateValues = props => {
        console.log(props);
        dispatch('UPDATE_NEWS_LETTER', props)
    }

    return <>
        {/* <div className={`form-outline mb-1 text-warning ${classes.inputContainer}`}> */}
        <div className="form-check d-flex justify-content-center mb-1 fs-5">
            <input className="form-check-input me-2 fs-5"
                type="checkbox"
                id="newsletterCheck"
                aria-describedby="newsletterCheckHelpText"
                onChange={event => updateValues(event.target.checked)}
                value={news_letter_checked}
            />

            <label className="form-check-label text-warning" htmlFor="newsletterCheck">I want to subscribe to Offers & Coupon updates!</label>
        </div>

        <div className="form-check d-flex justify-content-center mb-1 fs-5">
            <label className="form-check-label text-warning">If you have agreed to our <span> terms & conditions</span> Then Register</label>
        </div>
        {/* </div> */}
    </>

}

export default NewsletterCheckbox