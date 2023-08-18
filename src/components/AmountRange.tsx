import classes from '@/styles/amount_range.module.scss'

type Props = {
  min: number | null
  max: number | null
  onChange(min: number | null, max: number | null): void
}

export const AmountRange = (props: Props) => {

  return (
    <>
      <div className={classes.amount_range}>
        <div className={classes.heading}>Price</div>
        <div className={classes.container}>
          <div className={classes.input_box}>
            <input
              placeholder='8,000' type="number"
              value={props.min ?? ''}
              onChange={(e) => {
                props.onChange(e.target.value ? parseInt(e.target.value) : null, props.max)
              }}
            />
            <div className={classes.icon}>¥</div>
          </div>
          <span>~</span>
          <div className={classes.input_box}>
            <input 
              placeholder='10,000' type="number"
              value={props.max ??  ''}
              onChange={(e) => {
                props.onChange(props.min, e.target.value ? parseInt(e.target.value) : null)
              }}
            />
            <div className={classes.icon}>¥</div>
          </div>
        </div>
      </div>
    </>
  )
}