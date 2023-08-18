import Link from 'next/link'
import classes from '@/styles/common/card.module.scss'

type CommonCard = {
  item: any;
  link?: string;
  cardStyle?: React.CSSProperties;
  explanation?: boolean;
}

export const CommonCard = ({item, link = '/', cardStyle}: CommonCard) => {
  const getImage = (fileName: string): string => {
    return `${fileName}`
  }

  const formattedPrice = (price: number) => {
    const priceStr = price.toString();
    if(priceStr.length === 4) {
      return `${priceStr.slice(0, 1)},${priceStr.slice(1)}`;
    }
    if(priceStr.length === 5) {
      return `${priceStr.slice(0, 2)},${priceStr.slice(2)}`;
    }
    return priceStr
  }

  return(
    <>
      <div
        className={classes.card}
        style={cardStyle}
      >
        <Link href={link}>
          <div className={classes.image}>
            <img 
              src={getImage(item?.path)} alt={item.name}
              loading='lazy'
            />
          </div>
          <div className={classes.description}>
            <h3>{item.name.toUpperCase()}</h3>
            <em>{formattedPrice(item.price)}</em>
          </div>
        </Link>
      </div>
    </>
  )
}