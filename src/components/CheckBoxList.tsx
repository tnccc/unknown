import classes from '@/styles/check_box_list.module.scss'
import { CommonCheckBox } from './common/CommonCheckBox'

type Props = {
  heading: string;
  checkBoxes: any;
}

export const CheckBoxList = ({heading, checkBoxes}: Props) => {
  return (
    <>
      <div className={classes.check_box_list}>
        <div className={classes.heading}>{heading}</div>
        <CommonCheckBox 
          checkBoxes={checkBoxes}
          total={true}
        />
      </div>
    </>
  )
}