import classes from '@/styles/common/check_box.module.scss'

type Props = {
  checkBoxItem: {
    id: number;
    label: string;
    checked: boolean;
  };
  total?: boolean;
  onCheck: () => void;
  isChecked: boolean;
}

export const CommonCheckbox = ({checkBoxItem, onCheck, total, isChecked}: Props) => {
  return(
    <>
      <div className={classes.check_box}>
        <label>
          <input
            type="checkbox"
            value={checkBoxItem.id}
            onChange={onCheck}
          />
            <span className={`${isChecked ? classes.checked : ''}`}></span>
            {checkBoxItem.label}
        </label>
            {total ? <div className={classes.total}>100</div> : null}
      </div>
    </>
  )
}