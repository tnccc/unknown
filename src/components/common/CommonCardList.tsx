import classes from '@/styles/common/card_list.module.scss'
import { CommonCard } from "./CommonCard"

type Item = {
  id: string;
  name: string;
  price: number;
  department: string;
  category: string;
  path: string;
  released_at: string;
  sizes: string[];
}

type CommonCardListProps = {
  items: Item[];
  listStyle?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
};

export const CommonCardList = ({items, listStyle, cardStyle}: CommonCardListProps) => {
  return(
    <>
      <div
        className={classes.card_list}
        style={listStyle}
      >
        {items.map((item) => 
          <CommonCard key={item.name}
          link={`/products/${item.id}`}
          item={item} cardStyle={cardStyle}/>
        )}
      </div>
    </>
  )
}