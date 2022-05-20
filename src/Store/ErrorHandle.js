import { initStore } from './store'


const configureErrorStore = () => {

    const initialState = {
        error: {
            signupError: '',
            signinError: ''
        }
    }

    const actions = {
        RESET_SIGNUP_ERROR: (state)=>({
            error: {
                ...state.error, signupError: ''
            }
        }),
        RESET_SIGNIN_ERROR: (state)=>({
            error: {
                ...state.error, signinError: ''
            }
        }),
        UPDATE_SIGNUP_ERROR: (state, curState) => ({
            error: {
                ...state.error, signupError: curState
            }
        }),
        UPDATE_SIGNIN_ERROR: (state, curState) => ({
            error: {
                ...state.error, signinError: curState
            }
        }),
    }

    initStore(actions, initialState)
}

export default configureErrorStore