import Link from 'next/link' 
import styles from '@/styles/base.module.scss'
import classes from '@/styles/global/header.module.scss'
import { UserIcon } from './icon/UserIcon'
import { CartIcon } from './icon/CartIcon'
import { SearchIcon } from './icon/SearchIcon'

export const GlobalHeader = () => {
  return(
    <>
      <div className={classes.header}>
        <div className={`${styles.container} ${classes.container}`}>
          <h1 className={classes.logo}>
            <Link href="/">
              UNKNOWN
            </Link>
          </h1>
          <ul className={`${classes.list} ${classes.menu}`}>
            <li><Link href="/">New</Link></li>
            <li><Link href="/">Tops</Link></li>
            <li><Link href="/">Bottoms</Link></li>
            <li><Link href="/">Sale</Link></li>
          </ul>
          <ul className={classes.list}>
            <li><UserIcon /></li>
            <li><CartIcon /></li>
            <li><SearchIcon /></li>
          </ul>
        </div>

      </div>
    </>
  )
}