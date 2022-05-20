
// import { memo } from 'react';
import classes from './CartItem.module.css';
import { useStore } from '../../../Store/store';
import CardForCartItem from './CardForCartItem';

const CartItem = () => {


  const [state, dispatch] = useStore()

  let items = state.cart.items;
  let totalAmount = state.cart.totalAmount;

  // console.log(totalAmount);

  let selectedItems;
  items.sort((a, b) => a.id - b.id)

  selectedItems = items.map(item => {
    let thisState = {
      id: item.id,
      src: item.src,
      title: item.title,
      price: item.price,
      quanity: 0
    }

    for (let i of items) {
      if (i.id === item.id) {
        thisState = i
      }
    }

    const ItemHandler = ifAdd => {
      if (ifAdd) {
        dispatch('ADD_ITEM', {
          id: item.id,
          src: item.src,
          title: item.title,
          price: item.price
        })
      }
      else {
        if (thisState.quantity > 0) {
          dispatch('REMOVE_ITEM', {
            id: item.id
          })
        }
        else {
          thisState = {
            id: item.id,
            src: item.src,
            title: item.title,
            price: item.price,
            quanity: 0
          }
        }
      }
    }

    return <CardForCartItem
      key={item.id}
      src={item.src}
      title={item.title}
      quantity={item.quantity}
      price={item.price}
      ItemHandler={ItemHandler}
    />
  })

  return <>
    {items.length ?
      <>
        <div className={classes.itemContainer}>
          {selectedItems}
        </div>

        <button className={`btn btn-outline-warning btn-lg w-100 fs-2`}>Order now |  total price: {`${totalAmount}`} rs</button>
      </>
      :
      <h1 className={classes.empty}>Cart is Empty</h1>
    }
  </>
};

export default CartItem;
