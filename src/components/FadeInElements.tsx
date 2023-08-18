import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import classes from '@/styles/fade_in_elements.module.scss'

type Children = {
  children: ReactNode;
}

export const FadeInElements =  ({children}: Children) => {
  
  const { ref, inView } = useInView({
    rootMargin: '-200px 0px',
    triggerOnce: true,
  })

  return (
    <>
      <div
        ref={ref}
        className={
          `${classes.container} ${inView ? classes.fadeIn : ''}`
      }
      >
        {children}
      </div>
    </>
  )
}