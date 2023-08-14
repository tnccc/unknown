import classes from '@/styles/common/select_button.module.scss'

type Props = {
  value: string;
  size: string;
}

export const CommonSelectButton = ({value, size}: Props) => {
  console.log(value, size)
  return(
    <>
      <button 
        className={classes.select_button}
        value={value}
      >
        {size}
      </button>
    </>
  )
}