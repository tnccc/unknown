import { useState } from 'react'
import classes from '@/styles/common/select_button.module.scss'

type Props = {
  callback?: any
}

export const CommonSelectButton = ({callback}: Props) => {
  
  return(
    <>
      <button onClick={() => callback(1)}>
        テスト
      </button>
      {/* {buttonItems.map((buttonItem: any) => (
        <button 
          className={`${classes.select_button} ${selectedButton === buttonItem.value ? classes.selected : ''}`}
          value={buttonItem.value}
          key={buttonItem.value}
          onClick={() => clickHandler(buttonItem.value)}
        >
          {buttonItem.size}
        </button>
        ))} */}
    </>
  )
}