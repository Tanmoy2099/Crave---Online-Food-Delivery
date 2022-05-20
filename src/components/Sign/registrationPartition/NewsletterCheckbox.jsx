import React from 'react'
import { useStore } from '../../../Store/store'


function NewsletterCheckbox() {
    const [state, dispatch] = useStore()
    const newsLetter = state.registrationForm.news_letter_checked;

    const updateValues = props => {
        dispatch('UPDATE_NEWS_LETTER', {
            news_letter_checked: !newsLetter
        })
    }

    return <>
        <div className="form-check d-flex justify-content-center mb-1 fs-5">
            <input className="form-check-input me-2 fs-5"
                type="checkbox"
                id="newsletterCheck"
                aria-describedby="newsletterCheckHelpText"
                onChange={event => updateValues(event.target.value)}
                value={newsLetter}
            />

            <label className="form-check-label text-warning" htmlFor="newsletterCheck">I want to subscribe to Offers & Coupon updates!</label>
        </div>

        <div className="form-check d-flex justify-content-center mb-1 fs-5">
            <label className="form-check-label text-warning">by Registering, you have agreed to our <span> terms & conditions</span></label>
        </div>
    </>

}

export default NewsletterCheckbox