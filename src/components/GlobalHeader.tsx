import Link from 'next/link';
import styles from '@/styles/base.module.scss';
import classes from '@/styles/global/header.module.scss';
import { UserIcon } from './icon/UserIcon';
import { CartIcon } from './icon/CartIcon';
import { SearchIcon } from './icon/SearchIcon';

export const GlobalHeader = () => {
  const menus = [
    { title: 'New', path: '/' },
    { title: 'ALL', path: '/products' },
    { title: 'Tops', path: '/' },
    { title: 'Bottoms', path: '/' },
    { title: 'Sale', path: '/' },
  ];

  return (
    <>
      <div className={classes.header}>
        <div className={`${styles.container} ${classes.container}`}>
          <div className={classes.left_column}>
            <h1 className={classes.logo}>
              <Link href="/">UNKNOWN</Link>
            </h1>
            <ul className={`${classes.list} ${classes.menu_list}`}>
              {menus.map((menu) => (
                <li key={menu.title}>
                  <Link href={menu.path}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className={`${classes.list} ${classes.icon_list}`}>
            <li>
              <SearchIcon />
            </li>
            <li>
              <UserIcon />
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
          <div className={classes.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
