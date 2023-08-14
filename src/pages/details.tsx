import { useRef } from 'react';
// @ts-ignore spilideの型定義を無視
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Head from 'next/head'
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/details.module.scss'
import slider from '@/styles/common/slider.module.scss'
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { SliderArrow } from '../components/icon/SliderArrow';
import { details as images } from '../../public/const/details';
export default function details() {
  const splideRef = useRef<Splide | null>(null);

  const options = {
    perPage: 1,
    gap: 0,
    rewind: true,
  };

  const goToPrevSlide = () => {
    if(splideRef.current) {
      splideRef.current?.go('-1');
    }
  };

  const goToNextSlide = () => {
    if(splideRef.current) {
      splideRef.current?.go('+1');
    }
  }
  
  return (
    <>
      <Head>
        <title>UNKNOWN | 商品名を動的に取得</title>
        <meta name="description" content="UNKNWON SHOP" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.pages} ${classes.pages}`}>
        <GlobalHeader />
        <main className={styles.main}>
          <div className={classes.container}>
            <div className={classes.left_column}>
              <div className={classes.image}>
                <Splide
                  ref={splideRef}
                  hasTrack={false}
                  className={slider.slider}
                  options={options}
                >
                  <SplideTrack>
                    {images.map((image: any) => 
                      <SplideSlide 
                        className={slider.slider_slide}
                        key={image.path}
                      >
                        <figure>
                          <img src={image.path} alt={image.name} />
                        </figure>
                      </SplideSlide>
                    )}
                  </SplideTrack>
                  <div className={slider.slider_arrows}>
                    <button 
                      onClick={goToPrevSlide}
                      className={`${slider.slider_arrow} ${slider.slider_arrow_prev}`}
                    >
                      <SliderArrow />
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className={`${slider.slider_arrow} ${slider.slider_arrow_next}`}
                    >
                      <SliderArrow />
                    </button>
                  </div>
                </Splide>
              </div>
            </div>
            <div className={classes.right_column}>
              Right
            </div>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  )
}