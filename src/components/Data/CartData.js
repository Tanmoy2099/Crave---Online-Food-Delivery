
// CartData = JSON.parse(localStorage.getItem('CartData'));

// localStorage.setItem('CartData', JSON.stringify(CartData));

import { useStore } from '../../Store/store';


const CartData = () => {
    const globalState = useStore()[0]
    console.log(globalState);
}
export default CartData;
