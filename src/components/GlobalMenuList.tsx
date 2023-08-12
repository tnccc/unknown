import classes from '@/styles/global/menu_list.module.scss'
import { CommonCheckBox } from "./common/CommonCheckBox"

type Props = {
  label: string;
  checked: boolean;
}

type checkBoxs = {
  checkBoxs: Props[]
}

export const GlobalMenuList = ({checkBoxs}: checkBoxs) => {
  return (
    <>
      {checkBoxs.map((check) => {
        <div>
          <CommonCheckBox checkBox={check}/>
        </div>
      })}
      
    </>
  )
}