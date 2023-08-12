import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { checkboxs } from '../../public/const/checkboxs'
import { AllItems } from '../../public/const/Allitems'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { GlobalMenuList } from '@/components/GlobalMenuList'
import { CommonCardList } from '@/components/common/CommonCardList'

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
                <GlobalMenuList checkBoxs={checkboxs}/>
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