import Link from 'next/link'
import classes from '@/styles/common/card.module.scss'

type CommonCard = {
  item: any;
  link?: string;
  cardType?: string;
  explanation?: boolean;
}

export const CommonCard = ({item, link = '/', cardType = 'default'}: CommonCard) => {
  const getImage = (fileName: string): string => {
    return `${fileName}`
  }

  const formattedPrice = (price: any) => {
    const priceStr = price.toString();
    return priceStr
  }

  return(
    <>
      <div className={`${classes.card} ${classes[cardType]}`}>
        <Link href={link}>
          <div className={classes.image}>
            <img src={getImage(item?.path)} alt={item.name} />
          </div>
          <div className={classes.description}>
            <h3>{item.name}</h3>
            <em>{formattedPrice(item.price)}</em>
          </div>
        </Link>
      </div>
    </>
  )
}