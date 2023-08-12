import { useState } from 'react'
import classes from '@/styles/common/check_box.module.scss'

type Props = {
  checkBox: any;
}

export const CommonCheckBox = ({checkBox}: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const onChange = (e: any) => {
    const newCheckBoxs = checkBox.map((check: any) => {
      const newCheck = { ...check };
      if(newCheck.label === e.target.value) {
        newCheck.checked = !newCheck.checked;
      }
      return newCheck
    });
    setIsChecked(newCheckBoxs);
  }
  console.log(checkBox)

  return(
    <>
      <div>
        {checkBox.map((check: any) => {
          <div key={check.label}>
            <label>{check.label}</label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked((prevState) => !prevState)}
            />
          </div>
        })}
      </div>
    </>
  )
}