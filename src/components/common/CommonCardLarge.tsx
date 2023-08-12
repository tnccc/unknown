import classes from '@/styles/common/card_large.module.scss'
type Props = {
  path: string;
  caption: string;
}

export const CommonCardLarge = ({path, caption}: Props) => {
  return (
    <>
      <div className={classes.card}>
        <figure className={classes.figure}>
          <img src={path} alt={path} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </>
  )
}