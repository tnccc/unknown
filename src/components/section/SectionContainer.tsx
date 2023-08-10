import classes from '@/styles/section/container.module.scss'
import { GlobalHeading } from '../GlobalHeading'
GlobalHeading

export const SectionContainer = ({subHeading ,heading}: any) => {
  return(
    <>
      <div className={classes.container}>
        <GlobalHeading 
          subHeading={subHeading}
          heading={heading}
        />
      </div>
    </>
  )
}