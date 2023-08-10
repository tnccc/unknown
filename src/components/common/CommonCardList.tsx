import classes from '@/styles/common/card_list.module.scss'
import { CommonCard } from "./CommonCard"

export const CommonCardList = ({items}: any) => {
  return(
    <>
      <div className={classes.card_list}>
        {items.map((item: any) => 
          <CommonCard key={item.name} item={item}/>
        )}
      </div>
    </>
  )
}