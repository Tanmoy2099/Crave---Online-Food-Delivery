import { initStore } from './store';

const configureCartStore = () => {

    const addItem = (cartItems, addItem) => {

        if (cartItems.length === 0) {
            return [{ ...addItem, quantity: 1 }]
        }
        let otherItems = cartItems.filter(e => e.id !== addItem.id)

        for (let item of cartItems) {
            if (item.id === addItem.id) {
                if (item.quantity < 10) {
                    addItem = { ...addItem, quantity: item.quantity + 1 }
                    cartItems = [...otherItems, addItem]
                }
                return cartItems
            }
        }
        cartItems.push({ ...addItem, quantity: 1 })
        return cartItems
    };

    const removeItem = (cartItems, itemToRemove) => {
        let otherItems = cartItems.filter(e => e.id !== itemToRemove.id)

        for (let item of cartItems) {
            if (item.id === itemToRemove.id) {

                if (item.quantity > 1) {
                    let updatedQuantity = item.quantity - 1
                    return [...otherItems,
                    {
                        ...item,
                        quantity: updatedQuantity
                    }]
                }
                else {
                    cartItems = [...otherItems]
                    return cartItems;
                }
            }
        }
    };

    const addToTotal = (cart, curItem) => {

        let items = cart.items

        //cart.items = []
        if (items.length === 0) {
            return cart.totalAmount + curItem.price
        }

        //curItem is in cart.items
        for (let item of items) {
            if (item.id === curItem.id) {
                if (item.quantity < 10) {
                    return cart.totalAmount + curItem.price
                } else {
                    return cart.totalAmount
                }
            }
        }

        //curItem is not in cart.items
        return cart.totalAmount + curItem.price
    }

    const removeFromTotal = (cart, curItem) => {
        for (let item of cart.items) {
            if (item.id === curItem.id) {
                return cart.totalAmount - item.price
            }
        }
        return cart.totalAmount
    }

    const actions = {
        ADD_ITEM: (state, item) => ({
            cart: {
                items: addItem(state.cart.items, item),
                totalAmount: addToTotal(state.cart, item)
            }
        }),

        REMOVE_ITEM: (state, item) => ({
            cart: {
                items: removeItem(state.cart.items, item),
                totalAmount: removeFromTotal(state.cart, item)
            }
        }),
    };

    initStore(actions, {
        cart: {
            items: [],
            totalAmount: 0
        }
    });
};

export default configureCartStore;