import classes from '@/styles/common/card_list.module.scss'
import { CommonCard } from "./CommonCard"
import { Item } from '../../../public/const/Allitems';

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