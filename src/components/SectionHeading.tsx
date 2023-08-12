import classes from '@/styles/section_container.module.scss'
import { GlobalHeading } from './GlobalHeading'

export const SectionHeading = ({subHeading,heading, items}: any) => {
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