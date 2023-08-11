import classes from '@/styles/common/button.module.scss'
import { Arrow } from '../icon/Arrow';
import { Heart } from '../icon/Heart';

export const CommonButton = ({ text, variant, icon = 'default' }: any) => {
  const buttonClasses = `${classes.button} ${classes[variant]}`;

  return(
    <>
      <button className={buttonClasses}>
        <span className={classes.heart}>{icon === 'heart' ? <Heart /> : ''}</span>
        <div>{text}</div>
        <span className={classes.arrow}>{icon === 'arrow' ? <Arrow /> : ''}</span>
      </button>
    </>
  )
}