import { initStore } from './store'

const configureIsLoggedInStore = () => {

    const initialState = {
        isLoggedIn: false
    }

    const actions = {
        LOGGED_IN_TRUE: (state) => ({ isLoggedIn: true }),
        LOGGED_IN_FALSE: (state) => ({ isLoggedIn: false })
    }


    initStore(actions, initialState)
};

export default configureIsLoggedInStore