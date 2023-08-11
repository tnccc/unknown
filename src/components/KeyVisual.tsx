import classes from '@/styles/section/key_visual.module.scss'

export const KeyVisual = () => {
  return(
    <>
      <div className={classes.key_visual}>
        <figure>
          <img 
            src="/images/mv.jpg" 
            alt="UNKNOWN" 
            loading='lazy'
          />
        </figure>
      </div>
    </>
  )
}