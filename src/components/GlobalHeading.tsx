import classes from '@/styles/global/heading.module.scss'

export const GlobalHeading = ({subHeading ,heading}: any) => {

  return (
    <>
      <div className={classes.heading}>
        { subHeading && <span>{subHeading}</span> }
        <h3>{ heading }</h3>
      </div>
    </>
  )
}