import { initStore } from './store'


const configureRegistrationStore = () => {

    const initialState = {
        registrationForm: {
            firstName: {
                value: '',
                isValid: false,
                isTouched: false
            },
            lastName: {
                value: '',
                isValid: false,
                isTouched: false
            },
            email: {
                value: '',
                isValid: false,
                isTouched: false
            },
            phone: {
                value: '',
                isValid: false,
                isTouched: false
            },
            password: {
                value: '',
                isValid: false,
                isTouched: false
            },
            confirm_password: {
                value: '',
                isTouched: false
            }, 
            address: {
                value: '',
                isValid: false,
                isTouched: false
            },
            mystate: {
                value: '',
                isValid: false,
                isTouched: false
            },
            zip: {
                value: '',
                isValid: false,
                isTouched: false
            },
            news_letter_checked: false
        }
    }

    const actions = {
        CHANGE_UPDATED_STATES: (state) => ({
            registrationForm: { ...initialState.registrationForm }
        }),

        UPDATE_FIRST_NAME: ({ registrationForm }, curState) => ({
            registrationForm: {
                ...registrationForm,
                firstName: { ...registrationForm.firstName, ...curState }
            }
        }),
        UPDATE_LAST_NAME: ({ registrationForm }, curState) => ({
            registrationForm: {
                ...registrationForm,
                lastName: { ...registrationForm.lastName, ...curState }
            }
        }),
        UPDATE_EMAIL: (state, curState) => ({
            registrationForm: {
                ...state.registrationForm,
                email: { ...state.registrationForm.email, ...curState }
            }
        }),
        UPDATE_PHONE_NUMBER: (state, curState) => ({
            registrationForm: {
                ...state.registrationForm,
                phone: { ...state.registrationForm.phone, ...curState }
            }
        }),
        UPDATE_PASSWORD: (state, curState) => ({
            registrationForm: {
                ...state.registrationForm,
                password: { ...state.registrationForm.password, ...curState }
            }
        }),
        UPDATE_PASSWORD_CONFIRMATION: (state, curState) => ({
            registrationForm: {
                ...state.registrationForm,
                confirm_password: {
                    ...state.registrationForm.confirm_password,
                    ...curState
                }
            }
        }),
        UPDATE_ADDRESS: ({ registrationForm }, curState) => ({
            registrationForm: {
                ...registrationForm,
                address: { ...registrationForm.address, ...curState }
            }
        }),
        UPDATE_STATE: ({ registrationForm }, curState) => ({
            registrationForm: {
                ...registrationForm,
                mystate: { ...registrationForm.mystate, ...curState }
            }
        }),
        UPDATE_ZIP: ({ registrationForm }, curState) => ({
            registrationForm: {
                ...registrationForm,
                zip: { ...registrationForm.zip, ...curState }
            }
        }),
        UPDATE_NEWS_LETTER: ({ registrationForm}, curState) => ({
            registrationForm: {
                ...registrationForm,
                news_letter_checked: curState
            }
        })
    }

    initStore(actions, initialState)
}


export default configureRegistrationStore

