import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/products.module.scss'
import { AllItems } from '../../public/const/Allitems'
import { Categories } from '../../public/const/Categories'
import { Departments } from '../../public/const/Departments'
import { sizes } from '../../public/const/sizes'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { CheckboxList } from '@/components/CheckboxList'
import { ButtonList } from '@/components/ButtonList'
import { AmountRange } from '@/components/AmountRange'
import { CommonButton } from '@/components/common/CommonButton'
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"/>
      </Head>
      <div className={classes.pages}>
        <GlobalHeader />
          <main className={styles.main}>
            <div className={classes.container}>
              <div className={classes.left_column}>
                <CheckboxList
                  heading='Department'
                  checkBoxItems={Departments}
                />
                <CheckboxList
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
                />
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