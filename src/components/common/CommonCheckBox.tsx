import { useState } from 'react'
import classes from '@/styles/common/check_box.module.scss'

type Props = {
  checkBoxes: any;
  total?: boolean;
}

export const CommonCheckBox = ({checkBoxes, total}: Props) => {
  const [checkBoxList, setCheckBoxList] = useState(checkBoxes)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCheckBoxes = checkBoxList.map((checkBoxItem: any) => {
      const newCheckBox = { ...checkBoxItem };
      if(newCheckBox.label === e.target.value) {
        newCheckBox.checked = !checkBoxItem.checked;
        console.log(newCheckBox);
      }
      return newCheckBox;
    })
    setCheckBoxList(updatedCheckBoxes);
  }

  return(
    <>
      {checkBoxList.map((check: any) => 
        <div className={classes.check_box} key={check.label}>
          <label>
            <input
              type="checkbox"
              value={check.label}
              checked={check.checked}
              onChange={handleChange}
            />
              <span className={`${check.checked ? classes.checked : ''}`}></span>
              {check.label}
          </label>
              {total ? <div className={classes.total}>100</div> : null}
        </div>
      )}
    </>
  )
}