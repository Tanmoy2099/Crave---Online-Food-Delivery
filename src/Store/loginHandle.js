import { initStore } from './store'


const configureLoginStore = () => {

    const initialState = {
        loginForm: {
            email: {
                value: '',
                isValid: false,
                isTouched: false
            },
            password: {
                value: '',
                isValid: false,
                isTouched: false
            }
        }
    }

    const actions = {
        CHANGE_LOGIN_STATES: (state) => ({
            loginForm: { ...initialState.loginForm }
        }),

        LOGIN_EMAIL: (state, curState) => ({
            loginForm: {
                ...state.loginForm,
                email: { ...state.loginForm.email, ...curState }
            }
        }),
        LOGIN_PASSWORD: (state, curState) => ({
            loginForm: {
                ...state.loginForm,
                password: { ...state.loginForm.password, ...curState }
            }
        }),
    }

    initStore(actions, initialState)
};


export default configureLoginStore