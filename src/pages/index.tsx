import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import { GlobalHeader } from '@/components/GlobalHeader'
import { KeyVisual } from '@/components/KeyVisual'
import { NewArrive } from '@/components/section/NewArrive'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>UNKNOWN</title>
        <meta name="description" content="UNKNWON SHOP" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalHeader />
      <main className={`${styles.main}`}>
        <KeyVisual />
        <NewArrive items={props}/>
      </main>
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