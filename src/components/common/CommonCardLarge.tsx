import Link from 'next/link'
import classes from '@/styles/common/card_large.module.scss'
type Props = {
  path: string;
  caption: string;
  link: string;
}

export const CommonCardLarge = ({path, caption, link}: Props) => {
  return (
    <>
      <div className={classes.card}>
        <Link href={link}>
          <figure className={classes.figure}>
            <img src={path} alt={path} />
            <figcaption>{caption}</figcaption>
          </figure>
        </Link>
      </div>
    </>
  )
}