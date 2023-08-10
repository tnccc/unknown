import classes from '@/styles/common/card.module.scss'

export const CommonCard = ({card}: any) => {
  const getImage = (fileName: string): string => {
    return `/images/${fileName}`
  }
  console.log(card)

  return(
    <>
      <div className={classes.card}>
        <div>
          <img src={getImage(card)} alt="" />
          <div>
            {/* hover時に出現 */}
          </div>
        </div>
        <div>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </>
  )
}