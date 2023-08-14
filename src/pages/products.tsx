import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { AllItems } from '../../public/const/Allitems'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { CheckBoxList } from '@/components/CheckBoxList'
import { ButtonList } from '@/components/ButtonList'
import { AmountRange } from '@/components/AmountRange'
import { CommonCardList } from '@/components/common/CommonCardList'
import { CommonCheckBox } from '@/components/common/CommonCheckBox'
import { Categories } from '../../public/const/Categories'

export default function Products() {
  return (
    <>
      <Head>
        <title>UNKNOWN | Products</title>
        <meta name="description" content="UNKNWON SHOP" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.pages}>
        <GlobalHeader />
          <main className={styles.main}>
            <div className={classes.container}>
              <div className={classes.left_column}>
                Left
                {/* コンポーネント単位で表示する */}
                <CheckBoxList />
                <ButtonList />
                <AmountRange />
                <CommonCheckBox checkBoxes={Categories}/>
              </div>
              <div className={classes.right_column}>
                <CommonCardList
                  cardType='three'
                  items={AllItems} 
                />
              </div>
            </div>
          </main>
        <GlobalFooter />
      </div>
    </>
  )
}