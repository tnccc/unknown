import classes from '@/styles/common/card_list.module.scss'
import { CommonCard } from "./CommonCard"

type Item = {
  name: string;
  price: string;
  path: string;
  new?: boolean;
}

type CommonCardListProps = {
  items: Item[];
  cardType?: string;
};

export const CommonCardList = ({items, cardType = 'default'}: CommonCardListProps) => {
  return(
    <>
      <div className={`${classes.card_list} ${classes[cardType]}`}>
        {items.map((item: any) => 
          <CommonCard key={item.name} item={item} cardType={cardType}/>
        )}
      </div>
    </>
  )
}