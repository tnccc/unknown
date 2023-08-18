import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { allItems } from '../../public/const/allItems'
import { categories } from '../../public/const/categories'
import { departments } from '../../public/const/departments'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { CheckBoxList } from '@/components/CheckBoxList'
import { AmountRange } from '@/components/AmountRange'
import { CommonCardList } from '@/components/common/CommonCardList'


type ProductFilter = {
  departments: number[];
  categories: number[];
  minPrice: number | null;
  maxPrice: number | null;
}

export default function Products() {
  const [productFilters, setProductFilters] = useState<ProductFilter>({
    departments: [],
    categories: [],
    minPrice: null,
    maxPrice: null
  })
  
  const onPushFilterId = (
    itemName: 'departments' | 'categories', 
    id: number
  ) => {
    const prevIds = [...productFilters[itemName]]
    const exist = prevIds.includes(id)
    if(exist) {
      const updateIds = prevIds.filter((itemId: number) => itemId !== id)
      setProductFilters({
        ...productFilters,
        [itemName]: updateIds
      })
    }
    if(!exist) {
      setProductFilters({
        ...productFilters,
        [itemName]: [...prevIds, id]
      })
    }
  }

  const onChangePrice = (minPrice: number | null, maxPrice: number | null) => {
    setProductFilters({
      ...productFilters,
      minPrice: minPrice,
      maxPrice: maxPrice
    })
  }

  /**
   * 
   * const  [productFilters, setProductFilters] 内にはチェックボックスで選択された要素が持つIDの配列が格納、更新
   * 1. 選択されたIDとDepartment, CategoryのIDを比較
   * 2. 一致しているラベルを表示
   */
  const filteredNames = (itemName: 'departments' | 'categories') => {
    const selectedIds = productFilters[itemName];
    const items = itemName === 'departments' ? departments : categories;
    if(itemName === 'departments' ? selectedIds.length === 0 : '') {
      return 'ALL';
    }
    const matchingLabels = selectedIds.map(id => {
      const matchingItem = items.find(item => item.id === id);
      return matchingItem ? matchingItem.label : '';
    });
    return matchingLabels.join(', ');
  }

  const filteredItems = allItems.filter(item => {
    const departmentNames = productFilters.departments.map(id => {
      return departments.find(item => item.id === id)?.label
    })
    const categoriesNames = productFilters.categories.map(id => {
      return categories.find(item => item.id === id)?.label
    })
    if (productFilters.departments.length !== 0) {
      if (!departmentNames.includes(item.department)) {
        return false
      }
    }
    if (productFilters.categories.length !== 0) {
      if (!categoriesNames.includes(item.category)) {
        return false
      }
    }
    if (productFilters.minPrice !== null) {
      if (item.price < productFilters.minPrice) {
        return false
      }
    }
    if (productFilters.maxPrice !== null) {
      if (item.price > productFilters.maxPrice) {
        return false
      }
    }
    return true
  })

  // フィルターの処理はHooksに定義したい
  // const filteredItems2 = useFilteredItems(AllItems, productFilters)

  console.log("Department", productFilters.departments)
  console.log("Categories", productFilters.categories)

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
                  checkBoxItems={departments}
                  checkedBoxIds={productFilters.departments}
                  onChangeBoxId={(boxId) => {
                    onPushFilterId('departments', boxId)
                  }}
                />
                <CheckBoxList
                  heading='Category'
                  checkBoxItems={categories}
                  styles={{
                    paddingBlockStart: '16px',
                    borderBlockStart: '1px solid var(--border-color)'
                  }}
                  checkedBoxIds={productFilters.categories}
                  onChangeBoxId={(boxId) => {
                    onPushFilterId('categories', boxId)
                  }}
                />
                <AmountRange
                  min={productFilters.minPrice}
                  max={productFilters.maxPrice}
                  onChange={onChangePrice}
                />
              </div>
              <div className={classes.right_column}>
                <div className={classes.heading}>
                  <h3>
                    <span className={classes.label}>{filteredNames('departments')}</span>
                  </h3>
                  <div>
                    <span className={classes.label}>{filteredNames('categories')}</span>
                  </div>
                </div>
                <div className={classes.card_list}>
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
            </div>
          </main>
        <GlobalFooter />
      </div>
    </>
  )
}