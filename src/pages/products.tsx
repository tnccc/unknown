import React, { useState,  createContext, useContext } from 'react'
import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { AllItems } from '../../public/const/Allitems'
import { Categories } from '../../public/const/Categories'
import { Departments } from '../../public/const/Departments'
import { sizes } from '../../public/const/sizes'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { CheckBoxList } from '@/components/CheckBoxList'
import { ButtonList } from '@/components/ButtonList'
import { AmountRange } from '@/components/AmountRange'
import { CommonButton } from '@/components/common/CommonButton'
import { CommonCardList } from '@/components/common/CommonCardList'

export const CategoriesContext = createContext(null)

export default function Products() {
  const [categoriesId, setCategoriesId] = useState<number[]>([])

  const test = (msg: string) => {
    console.log(msg)
  }

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
                />
                <CheckBoxList
                  heading='Category'
                  checkBoxItems={Categories}
                  styles={{
                    paddingBlockStart: '16px',
                    borderBlockStart: '1px solid var(--gray)'
                  }}
                />
                <ButtonList 
                  heading='Size'
                  buttonItems={sizes}
                  styles={{
                    paddingBlockStart: '16px',
                    borderBlockStart: '1px solid var(--gray)'
                  }}
                />
                <AmountRange />
                <CommonButton
                  text={'Save'}
                  variant={'outline'}
                  callback={test}
                />
              </div>
              <div className={classes.right_column}>
                <CommonCardList
                  items={AllItems} 
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