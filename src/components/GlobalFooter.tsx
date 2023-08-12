import styles from '@/styles/base.module.scss'
import classes from '@/styles/global/footer.module.scss'

export const GlobalFooter = () => {
  return(
    <>
      <footer className={classes.footer}>
        <div className={`${styles.container} ${classes.container}`}>
          <p>@ UNKNOWN</p>
        </div>
      </footer>
    </>
  )
}