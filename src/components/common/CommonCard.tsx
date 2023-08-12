import classes from '@/styles/common/card.module.scss'

export const CommonCard = ({item}: any) => {
  const getImage = (fileName: string): string => {
    return `${fileName}`
  }

  return(
    <>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={getImage(item?.path)} alt={item.name} />
        </div>
        <div className={classes.description}>
          <h3>{item.name}</h3>
          <em>{item.price}</em>
        </div>
      </div>
    </>
  )
}