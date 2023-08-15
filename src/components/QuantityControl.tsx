import { useState } from 'react'
import classes from '@/styles/quantity_control.module.scss'

export const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1)
  const quantityReduce = () => {
    if(quantity > 1)  {
      return setQuantity(quantity - 1);
    };
  }

  const quantityIncrement = () => {
    if(quantity < 10) {
      return setQuantity(quantity + 1)
    }
  }

  return(
    <>
      <div className={classes.quantity_control}>
        <button onClick={quantityReduce}>
          <span>-</span>
        </button>
        <div>
          <span>
            {quantity}
          </span>
        </div>
        <button onClick={quantityIncrement}>
          <span>+</span>
        </button>
      </div>
    </>
  )
}