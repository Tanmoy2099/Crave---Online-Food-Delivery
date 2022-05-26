// import { useEffect } from 'react'
import { useStore } from '../../../Store/store'
import { useAuth } from '../../../contexts/AuthContext'

const CartDbUpdate = () => {

    const dispatch = useStore()[1]
    const { currentUserData, isLoggedIn } = useAuth()
    
    // useEffect(() => {
        setTimeout(() => {
            if (isLoggedIn) {
                const cartDb = currentUserData?.cart
                // console.log(cartDb)
                dispatch('CART_DB', cartDb)
                console.log(currentUserData?.cart)
            }
        }, 200)
        // return localCartUpdate
    // }, [isLoggedIn, dispatch])
    return
}

export default CartDbUpdate
