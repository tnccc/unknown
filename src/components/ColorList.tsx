import { useState } from 'react';
import classes from '@/styles/color_list.module.scss'
type Items = {
  items: string[];
  styles?: any;
}

export const ColorList = ({items, styles}: Items) => {

  return (
    <>
      <div className={classes.color_list}>
        <div className={classes.heading}>
          Color
          {/* 選択中の色 */}
        </div>
        <div className={classes.container}>
          {items.map((item: string) => (
            <button
              className={classes[item]}
              
            />
          ))}
        </div>
      </div>
    </>
  )
}