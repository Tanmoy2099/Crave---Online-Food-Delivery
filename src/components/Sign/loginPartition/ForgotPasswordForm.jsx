import React, { useState } from 'react'
import { useStore } from '../../../Store/store'
import { useAuth } from '../../../contexts/AuthContext'

import classes from '../Login.module.css'

const ForgotPasswordForm = () => {
    const [message, setMessage] = useState('')

    const [{ loginForm, backdrop }, dispatch] = useStore()
    const { email } = loginForm
    const { isLoading } = backdrop

    const { resetPassword } = useAuth()


    const loginHandler = async () => {
        dispatch('IS_LOADING', true)
        try {
            await resetPassword(email.value)
            setMessage('Reset password, email is sent !')
        } catch (error) {
            setMessage(error.message)
            dispatch('IS_LOADING', false)
            return
        }
        dispatch('IS_LOADING', false)
        dispatch('CHANGE_LOGIN_STATES')
        setTimeout(() => {
            dispatch('CHANGE_BACKDROP_STATE', false)
        }, 2000)
    }

    return <>
        {message && <h3 className={classes.formKey} >{message}</h3> }
        {email.isValid ? <button type="submit" disabled={isLoading} onClick={loginHandler} className={`btn btn-warning fs-3 btn-block my-2 w-100 `}>{isLoading ? `loading...` : `Reset Password`} </button>
            :
            <button className={`btn btn-warning my-3 w-100 fs-3 disabled`}>Reset Password</button>

        }
    </>
}

export default ForgotPasswordForm

