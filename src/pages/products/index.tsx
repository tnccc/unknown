import React, { useState,  createContext, useContext } from 'react'
import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { AllItems } from '../../../public/const/AllItems'
import { Categories } from '../../../public/const/categories'
import { Departments } from '../../../public/const/departments'
import { sizes } from '../../../public/const/sizes'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { CheckBoxList } from '@/components/CheckBoxList'
import { ButtonList } from '@/components/ButtonList'
import { AmountRange } from '@/components/AmountRange'
import { CommonButton } from '@/components/common/CommonButton'
import { CommonCardList } from '@/components/common/CommonCardList'


type BoxFilter = {
  departments: number[]
  categories: number[]
  sizes: number[]
  minPrice: number | null
  maxPrice: number | null
}

export default function Products() {
  const [categoriesId, setCategoriesId] = useState<number[]>([])

  const test = (msg: string) => {
    console.log(msg)
  }

  const [selectedBox, setBox] = useState<BoxFilter>({
    departments: [],
    categories: [],
    sizes: [],
    minPrice: null,
    maxPrice: null
  })

  /**
   * チェックボックスの値を追加する
   */
  const onPushFilterId = (itemName: "departments" | "categories" | "sizes", id: number) => {
    const prevIds = [...selectedBox[itemName]]
    const exist = prevIds.includes(id)
    if(exist) {
      setBox({
        ...selectedBox,
        [itemName]: prevIds.filter((itemId: number) => itemId !== id)
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
    // departmentの名前の配列
    const departmentNames = selectedBox.departments.map(id => {
      return Departments.find(item => item.id === id)?.label.toUpperCase()
    })
    // categoryの名前の配列
    const categoriesNames = selectedBox.categories.map(id => {
      return Categories.find(item => item.id === id)?.label.toUpperCase()
    })
    // departmentが選択されている場合
    if (selectedBox.departments.length !== 0) {
      // departmentの名前の配列にitemのdepartmentが含まれていない場合は除外
      if (!departmentNames.includes(item.department.toUpperCase())) {
        return false
      }
    }
    // categoryが選択されている場合
    if (selectedBox.categories.length !== 0) {
      // categoryの名前の配列にitemのcategoryが含まれていない場合は除外
      if (!categoriesNames.includes(item.category.toUpperCase())) {
        return false
      }
    }
    // sizeが選択されている場合
    if (selectedBox.sizes.length === 0) {}
    // priceの最小値が設定されている場合
    if (selectedBox.minPrice !== null) {
      // 商品の値段が最小値より小さい場合は除外
      if (item.price < selectedBox.minPrice) {
        return false
      }
    }
    // priceの最大値が設定されている場合
    if (selectedBox.maxPrice !== null) {
      // 商品の値段が最大値より大きい場合は除外
      if (item.price > selectedBox.maxPrice) {
        return false
      }
    }
    return true
  })

  // フィルターの処理はHooksに定義したい
  // const filteredItems2 = useFilteredItems(AllItems, selectedBox)

  console.log("selectedBox", selectedBox.minPrice, selectedBox.maxPrice)

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
                    borderBlockStart: '1px solid var(--gray)'
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
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
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