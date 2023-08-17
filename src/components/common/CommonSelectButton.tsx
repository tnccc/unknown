import { useState } from 'react'
import classes from '@/styles/common/select_button.module.scss'

type Props = {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const CommonSelectButton = ({label, isSelected, onSelect}: Props) => {
  return(
    <>
      <button 
        className={`${classes.select_button} ${isSelected ? classes.selected : ''}`}
        onClick={onSelect}
      >
        {label}
      </button>
    </>
  )
}