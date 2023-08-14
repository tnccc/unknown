import { useState } from 'react';
import classes from '@/styles/button_list.module.scss'
import { CommonSelectButton } from './common/CommonSelectButton'

type Props = {
  heading: string;
  buttonItems: any;
  styles?: React.CSSProperties;
}

export const ButtonList = ({heading ,buttonItems, styles}: Props) => {

  return (
    <>
      <div
        className={classes.button_list}
        style={styles}
      >
        <div className={classes.heading}>{heading}</div>
        <div className={classes.container}>
          <CommonSelectButton 
            buttonItems={buttonItems}
          />
        </div>
      </div>
    </>
  )
}