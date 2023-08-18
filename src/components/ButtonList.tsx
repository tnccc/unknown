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
  checkedBoxIds: number[]; // added
  onChangeBoxId(id: number): void; // added
}

type ButtonItem = {
  id: number;
  value: string;
};

export const ButtonList = ({heading, buttonItems , styles, checkedBoxIds, onChangeBoxId}: Props) => {
  // const [selectedItemId, setSelectedItemId] = useState<number[]>([])
  // const selectHandler = (id: number) => {
  //   setSelectedItemId((prevSelectedIds): any => {
  //     const exist = prevSelectedIds.includes(id);
  //     if (exist) {
  //       return prevSelectedIds.filter((itemId: number) => itemId !== id);
  //     } 
  //     if (!exist) {
  //       return [...prevSelectedIds, id];
  //     }
  //   });
  // };

  const selectHandler = (id: number) => {
    onChangeBoxId(id)
  }

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