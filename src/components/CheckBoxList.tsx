import classes from '@/styles/check_box_list.module.scss';
import { CommonCheckBox } from './common/CommonCheckBox';
import { FC } from 'react';

type Props = {
  heading: string;
  checkBoxItems: {
    id: number;
    label: string;
    checked: boolean;
  }[];
  styles?: React.CSSProperties;
  checkedBoxIds: number[];
  onChangeBoxId(id: number): void;
}

type CheckBoxItem = {
  id: number;
  label: string;
  checked: boolean;
}

export const CheckBoxList: FC<Props> = ({heading, checkBoxItems, styles, checkedBoxIds, onChangeBoxId}) => {
  const checkHandler = (id: number) => {
    onChangeBoxId(id)
  };


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
            key={item.id}
            isChecked={checkedBoxIds.includes(item.id)}
            onCheck={() => checkHandler(item.id)}
          />
        ))}
      </div>
    </>
  )
}