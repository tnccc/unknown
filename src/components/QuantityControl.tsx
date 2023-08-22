import classes from '@/styles/quantity_control.module.scss';
import { FC } from 'react';

type Props = {
  quantity: number;
  onChangeQuantity: any;
};

export const QuantityControl: FC<Props> = ({ quantity, onChangeQuantity }) => {
  return (
    <>
      <div className={classes.quantity_control}>
        <button onClick={() => onChangeQuantity('decrement')}>
          <span>-</span>
        </button>
        <div>
          <span>{quantity}</span>
        </div>
        <button onClick={() => onChangeQuantity('increment')}>
          <span>+</span>
        </button>
      </div>
    </>
  );
};
