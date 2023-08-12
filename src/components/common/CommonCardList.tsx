import classes from '@/styles/common/card_list.module.scss'
import { CommonCard } from "./CommonCard"

type Props = {
  name: string;
  price: string;
  path: string;
  new?: boolean;
}

type Item = {
  items: Item[];
}

export const CommonCardList = ({items}: Item) => {
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