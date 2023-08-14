import { useState } from 'react'
import classes from '@/styles/common/select_button.module.scss'

type Props = {
  buttonItems: {
    size: string;
    value: string;
  }[]
}

export const CommonSelectButton = ({buttonItems}: Props) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const clickHandler = (value: string) => {
    setSelectedButton(prevSelectButton => (prevSelectButton === value ? null : value))
  }
  
  return(
    <>
      {buttonItems.map((buttonItem: any) => (
        <button 
          className={`${classes.select_button} ${selectedButton === buttonItem.value ? classes.selected : ''}`}
          value={buttonItem.value}
          key={buttonItem.value}
          onClick={() => clickHandler(buttonItem.value)}
        >
          {buttonItem.size}
        </button>
        ))}
    </>
  )
}