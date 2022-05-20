import { initStore } from './store';

const initialState = {
    backdrop: {
        backdropState: false,
        formState: false,
        cartState: false,
        isLoading: false
    }
}

const configureBackdropStore = () => {

    const actions = {
        CHANGE_BACKDROP_STATE: (state, curState) => ({
            backdrop: {
                ...state.backdrop,
                backdropState: curState ? true : false
            }
        }),
        CHANGE_FORM_STATE: (state, curState) => ({
            backdrop: {
                ...state.backdrop,
                formState: curState ? true : false
            }
        }),
        CHANGE_CART_STATE: (state, curState) => ({
            backdrop: {
                ...state.backdrop,
                cartState: curState ? true : false
            }
        }),
        IS_LOADING: (state, curState) => ({
            backdrop: {
                ...state.backdrop,
                isLoading: curState ? true : false
            }
        }),
    };

    initStore(actions, initialState);
};

export default configureBackdropStore;