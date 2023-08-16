import classes from '@/styles/global/menu_list.module.scss'
import { CommonCheckBox } from "./common/CommonCheckbox"

type Props = {
  label: string;
  checked: boolean;
}

type checkBoxes = {
  checkBoxes: Props[]
}

export const GlobalMenuList = (checkBoxes: checkBoxes) => {
  return (
    <>
      <div className={classes.menu_list}>
        <div className={classes.container}>
          <CommonCheckBox checkBoxes={checkBoxes.checkBoxes} />
        </div>
      </div>
    </>
  )
}