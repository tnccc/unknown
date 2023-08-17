import { useState } from 'react'
import classes from '@/styles/amount_range.module.scss'

export const AmountRange = () => {

  return (
    <>
      <div className={classes.amount_range}>
        <div className={classes.heading}>Price</div>
        <div className={classes.container}>
          <div className={classes.input_box}>
            <input
              placeholder='8,000' type="number"
            />
            <div className={classes.icon}>¥</div>
          </div>
          <span>~</span>
          <div className={classes.input_box}>
            <input 
              placeholder='10,000' type="number"
            />
            <div className={classes.icon}>¥</div>
          </div>
        </div>
      </div>
    </>
  )
}