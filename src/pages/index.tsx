import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/index.module.scss'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { KeyVisual } from '@/components/KeyVisual'
import { SectionHeading } from '@/components/SectionHeading'
import { CommonButton } from '@/components/common/CommonButton'
import { CommonSlider } from '@/components/common/CommonSlider'
import { CommonCardLarge } from '@/components/common/CommonCardLarge'
import { CommonCardList } from '@/components/common/CommonCardList'
import { AllItems } from '../../public/const/Allitems'
import { Item } from '../../public/const/Allitems'
import { Hoge } from '@/components/common/CommonButton'

export default function Home() {
  const filteredList = (): Item[] => {
    return AllItems.filter((item: any) => item.id < 12)
  }

  const test = (msg: string) => {
    console.log(msg)
  }

  return (
    <>
      <Head>
        <title>UNKNOWN</title>
        <meta name="description" content="UNKNOWN SHOP" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"/>
      </Head>
      <div className={styles.pages}>
        <GlobalHeader />
        <main className={styles.main}>
          <KeyVisual />
          <section className={classes.top}>
            <div className={classes.section}>
              <SectionHeading heading={'New Arrivals'} />
              <CommonSlider 
                items={filteredList()}
                rewind={true}
              />
              <Hoge props={false}/>
              <div className={classes.category_list}>
                <CommonCardLarge 
                  link={'/products'}
                  path={'/images/all.jpg'}
                  caption='ALL'
                />
                <CommonCardLarge 
                  link={'/products'}
                  path={'/images/tops.jpg'}
                  caption='TOPS'
                />
                <CommonCardLarge 
                  link={'/products'}
                  path={'/images/bottoms.jpg'}
                  caption='BOTTOMS'
                />
              </div>
            </div>
            <section>
              <div className={classes.banner}>
                <div className={classes.banner_contents}>
                  <div className={classes.banner_text}>
                    <h4>
                      <span>New 2023</span>
                      <span>Clothes Collection</span>
                    </h4>
                    <CommonButton
                      icon={'arrow'}
                      text={'Shop Now'}
                      callback={test}
                    />
                  </div>
                  <figure className={classes.banner_figure}>
                    <img src="/images/banner.jpg" alt="New 2023 Clothes Collection" />
                  </figure>
                </div>
              </div>
            </section>
            <section className={`${classes.section} ${classes.ranking}`}>
              <div>
                <SectionHeading
                  subHeading={'TOP SELLING'}
                  heading={'RANKING'}
                />
                <div className={classes.ranking_list}>
                  <CommonCardList items={filteredList()}/>
                </div>
              </div>
            </section>
          </section>
        </main>
        <GlobalFooter />
      </div>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const host = context.req.headers.host || 'localhost:3000';
    const protocol = /^localhost/.test(host) ? 'http' : 'https';
    const products = await fetch(`${protocol}://${host}/api/products`)
        .then(data => data.json());
    return {
        props: {
            products,
        }
    };
  } catch (e) {
    console.log(e);
    return {
        props: {
            products: [],
        }
    };
  }
};