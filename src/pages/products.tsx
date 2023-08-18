import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { AllItems } from '../../public/const/Allitems'
import { Categories } from '../../public/const/Categories'
import { Departments } from '../../public/const/Departments'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { CheckBoxList } from '@/components/CheckBoxList'
import { AmountRange } from '@/components/AmountRange'
import { CommonCardList } from '@/components/common/CommonCardList'


type BoxFilter = {
  departments: number[];
  categories: number[];
  sizes: number[];
  minPrice: number | null;
  maxPrice: number | null;
}

export default function Products() {
  const [selectedBox, setBox] = useState<BoxFilter>({
    departments: [],
    categories: [],
    sizes: [],
    minPrice: null,
    maxPrice: null
  })

  const onPushFilterId = (
    itemName: 'departments' | 'categories', 
    id: number
  ) => {
    const prevIds = [...selectedBox[itemName]]
    const exist = prevIds.includes(id)
    if(exist) {
      const updateIds = prevIds.filter((itemId: number) => itemId !== id)
      setBox({
        ...selectedBox,
        [itemName]: updateIds
      })
    }
    if(!exist) {
      setBox({
        ...selectedBox,
        [itemName]: [...prevIds, id]
      })
    }
  }

  const onChangePrice = (minPrice: number | null, maxPrice: number | null) => {
    setBox({
      ...selectedBox,
      minPrice: minPrice,
      maxPrice: maxPrice
    })
  }

  const filteredItems = AllItems.filter(item => {
    const departmentNames = selectedBox.departments.map(id => {
      return Departments.find(item => item.id === id)?.label
    })
    const categoriesNames = selectedBox.categories.map(id => {
      return Categories.find(item => item.id === id)?.label.toUpperCase()
    })
    if (selectedBox.departments.length !== 0) {
      if (!departmentNames.includes(item.department.toUpperCase())) {
        return false
      }
    }
    if (selectedBox.categories.length !== 0) {
      if (!categoriesNames.includes(item.category.toUpperCase())) {
        return false
      }
    }
    if (selectedBox.minPrice !== null) {
      if (item.price < selectedBox.minPrice) {
        return false
      }
    }
    if (selectedBox.maxPrice !== null) {
      if (item.price > selectedBox.maxPrice) {
        return false
      }
    }
    return true
  })

  // フィルターの処理はHooksに定義したい
  // const filteredItems2 = useFilteredItems(AllItems, selectedBox)

  console.log("Department", selectedBox.departments)
  console.log("Categories", selectedBox.categories)

  return (
    <>
      <Head>
        <title>UNKNOWN | Products</title>
        <meta name="description" content="UNKNOWN SHOP" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"/>
      </Head>
      <div className={classes.pages}>
        <GlobalHeader />
          <main className={styles.main}>
            <div className={classes.container}>
              <div className={classes.left_column}>
                <CheckBoxList
                  heading='Department'
                  checkBoxItems={Departments}
                  checkedBoxIds={selectedBox.departments}
                  onChangeBoxId={(boxId) => {
                    onPushFilterId('departments', boxId)
                  }}
                />
                <CheckBoxList
                  heading='Category'
                  checkBoxItems={Categories}
                  styles={{
                    paddingBlockStart: '16px',
                    borderBlockStart: '1px solid var(--border-color)'
                  }}
                  checkedBoxIds={selectedBox.categories}
                  onChangeBoxId={(boxId) => {
                    onPushFilterId('categories', boxId)
                  }}
                />
                <AmountRange
                  min={selectedBox.minPrice}
                  max={selectedBox.maxPrice}
                  onChange={onChangePrice}
                />
              </div>
              <div className={classes.right_column}>
                <CommonCardList
                  items={filteredItems} 
                  listStyle={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  }}
                  cardStyle={{
                    width: '100%'
                  }}
                />
              </div>
            </div>
          </main>
        <GlobalFooter />
      </div>
    </>
  )
}