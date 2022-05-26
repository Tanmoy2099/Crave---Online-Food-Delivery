// import { useEffect } from 'react'
import classes from './OrderCard.module.css';
import { useStore } from '../../../../Store/store';

//--------------- NEED TO FIX-------------

const Ordercard = ({ id, src, title, description, price }) => {


    const [{ cart }, dispatch] = useStore();

    let thisState = {
        id: id,
        src: src,
        title: title,
        price: price,
        quanity: 0
    }

    if (cart.items) {
        for (let item of cart.items) {
            if (item.id === id) {
                thisState = { ...item }
            }
        }
    }

    const ItemHandler = ifAdd => {
        if (ifAdd) {
            dispatch('ADD_ITEM', {
                id: id,
                src: src,
                title: title,
                price: price
            })

        }  else {
            if (thisState.quantity > 0) {
                dispatch('REMOVE_ITEM', { id: id })
            } else {
                thisState.quantity = 0
            }

        }
    }

    return (
        <div className={`${classes.container}`}>
            {/* <div className={classes.imgDiscriptionContainer}> */}
            <div className={`${classes.imgContainer}`}>
                <img className={`${classes.cardimage}`} src={src} alt="Card cap" />
                <p className={classes.description420}>{description}</p>
            </div>

            {/* <span className={classes.discount}>50% off</span> */}

            <div className={classes.cardInfoBox}>
                <div className='d-flex justify-content-between m-2'>
                    <h3 className={classes.title} >{title.slice(0,21)}</h3>
                    <h3 className='h2 font-weight-bold'><span>Rs:</span> {price}</h3>
                </div>
                <p className={classes.description}>{description}</p>

                {/* </div> */}
            </div>
            {thisState.quantity ?
                <div className={classes.buttonContainer}>
                    <button className={`btn btn-warning ${classes.changeButton}`}
                        onClick={() => ItemHandler(false)}
                    >-</button>

                    <input className={`btn-warning ${classes.inputNum}`}
                        type="text"
                        value={`${thisState.quantity}`}
                        readOnly="readonly"
                        disabled=" disabled" />

                    <input className={`btn-warning ${classes.inputNum}`}
                        type="text"
                        value={`Rs: ${thisState.quantity * price}`}
                        readOnly="readonly"
                        disabled=" disabled" />

                    <button className={`btn btn-warning ${classes.changeButton}`}
                        onClick={() => ItemHandler(true)}
                    >+</button>
                </div>

                :

                <button className={`btn btn-warning ${classes.cartButton}`}
                    onClick={() => ItemHandler(true)}
                >Add to cart</button>
            }
        </div>
    )
}

export default Ordercard;
