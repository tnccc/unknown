import classes from '@/styles/common/button.module.scss';
import { Arrow } from '../icon/Arrow';
import { Heart } from '../icon/Heart';

type Props = {
  text: string;
  variant?: string;
  icon?: string;
  callback: any;
};

export const CommonButton = ({
  text,
  variant = 'default',
  icon = 'default',
  callback,
}: Props) => {
  const buttonClasses = `${classes.button} ${classes[variant]}`;

  return (
    <>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => callback('action')}
      >
        <span className={classes.heart}>{icon === 'heart' && <Heart />}</span>
        <div>{text}</div>
        <span className={classes.arrow}>{icon === 'arrow' && <Arrow />}</span>
      </button>
    </>
  );
};
