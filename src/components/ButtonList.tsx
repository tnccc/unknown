import { useState } from 'react';
import classes from '@/styles/button_list.module.scss'
import { CommonSelectButton } from './common/CommonSelectButton'

type Props = {
  heading: string;
  buttonItems: {
    id: number;
    value: string;
  }[];
  styles?: React.CSSProperties;
  checkedBoxIds: number[];
  onChangeBoxId(id: number): void;
}

type ButtonItem = {
  id: number;
  value: string;
};

export const ButtonList = ({heading, buttonItems , styles, checkedBoxIds, onChangeBoxId}: Props) => {
  const selectHandler = (id: number) => {
    onChangeBoxId(id);
  };

  return (
    <>
      <div
        className={classes.button_list}
        style={styles}
      >
        <div className={classes.heading}>{heading}</div>
        <div className={classes.container}>
          {buttonItems.map((item: ButtonItem) => (
            <CommonSelectButton 
              label={item.value}
              key={item.id}
              isSelected={checkedBoxIds?.includes(item.id)}
              onSelect={() => selectHandler(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  )
}