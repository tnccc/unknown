import classes from '@/styles/section/new_arrive.module.scss'
import { SectionContainer } from "./SectionHeading"
import { CommonCardList } from '../common/CommonCardList'

export const NewArrive = (items: any) => {
  const heading = 'New Arrivals'
  return(
    <>
      <SectionContainer heading={heading} />
      <div className={classes.contents}>
        <CommonCardList items={items.items.products}/>
      </div>
    </>
  )
}