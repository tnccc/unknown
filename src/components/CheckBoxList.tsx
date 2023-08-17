import classes from '@/styles/check_box_list.module.scss';
import { CommonCheckBox } from './common/CommonCheckBox';
import { useState } from 'react';

type Props = {
  heading: string;
  checkBoxItems: {
    id: number;
    label: string;
    checked: boolean;
  }[];
  styles?: React.CSSProperties;
}

type CheckBoxItem = {
  id: number;
  label: string;
  checked: boolean;
}

export const CheckBoxList = ({heading, checkBoxItems, styles}: Props) => {
  const [checkedBoxId, setCheckedBoxId] = useState<number[]>([])
  const checkHandler = (id: number) => {
    setCheckedBoxId((prevSelectedIds): any => {
      const exist = prevSelectedIds.includes(id)
      if(exist) {
        return prevSelectedIds.filter((itemId: number) => itemId !== id)
      }
      if(!exist) {
        return [...prevSelectedIds, id]
      }
    })
  }

  return (
    <>
      <div 
        className={classes.check_box_list}
        style={styles}
      >
        <div className={classes.heading}>{heading}</div>
        {checkBoxItems.map((item: CheckBoxItem) => (
          <CommonCheckBox
            checkBoxItem={item}
            total={true}
            key={item.id}
            isChecked={checkedBoxId.includes(item.id)}
            onCheck={() => checkHandler(item.id)}
          />
        ))}
      </div>
    </>
  )
}