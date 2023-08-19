import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router' 
import { useRef, useState } from 'react';

// @ts-ignore spilideの型定義を無視
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from '@/styles/base.module.scss'
import classes from '@/styles/pages/details.module.scss'
import slider from '@/styles/common/slider.module.scss'
import { sizes } from '../../../public/const/sizes';
import { GlobalHeader } from '@/components/GlobalHeader'
import { GlobalFooter } from '@/components/GlobalFooter'
import { SliderArrow } from '../../components/icon/SliderArrow';
import { ColorList } from '@/components/ColorList';
import { ButtonList } from '@/components/ButtonList';
import { QuantityControl } from '@/components/QuantityControl';
import { CommonButton } from '@/components/common/CommonButton';
import { allItems } from '../../../public/const/allItems';
import { colors } from '../../../public/const/colors';

type selectBox = {
  sizes: number[];
  colors: number[];
};

const detail: NextPage = ((props: any) => {
  const [selectBox, setSelectBox] = useState<selectBox>({
    sizes: [],
    colors: [],
  });
  const router = useRouter();
  const splideRef = useRef<Splide | null>(null);
  const options = {
    perPage: 1,
    gap: 0,
    rewind: true,
  };

  const product = allItems.find((item: any) => item.id === router.query.id);

  const test = (msg: string) => {
    console.log(msg)
  }

  if(router.isFallback) {
    return <div>loading...</div>
  }

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

  const formattedPrice = (price: number) => {
    const priceStr = price.toString();
    if(priceStr.length === 4) {
      return `${priceStr.slice(0, 1)},${priceStr.slice(1)}`;
    }
    if(priceStr.length === 5) {
      return `${priceStr.slice(0, 2)},${priceStr.slice(2)}`;
    }
    return priceStr;
  }

  const onPushFilterId = (
    itemName: 'sizes' | 'colors',
    id: number,
  ) => {
    const prevIds = [...selectBox[itemName]];
    const exist = prevIds.includes(id);
    if(exist) {
      const updateIds = prevIds.filter((itemId: number) => itemId !== id);
      setSelectBox({
        ...selectBox,
        [itemName]: updateIds
      })
    };
    if(!exist) {
      setSelectBox({
        ...selectBox,
        [itemName]: [...prevIds, id]
      })
    };
  }

  console.log('colors', selectBox.colors);
  console.log('sizes', selectBox.sizes);

  return (
    <>
      <Head>
        <title>UNKNOWN | {props.name}</title>
        <meta name="description" content="UNKNOWN SHOP" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"/>
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
                    {product?.images.map((image: any) => 
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
              <div className={classes.heading}>
                <div className={classes.title}>
                  <span>{product?.category}</span>
                  <h2>{product?.name}</h2>
                </div>
                <div className={classes.price}>
                  <span>{formattedPrice(product?.price ?? 0)}</span>
                </div>
              </div>
              <div className={classes.color}>
                <ColorList
                  checkedBoxIds={selectBox.colors}
                  onChangeBoxId={(boxId) => onPushFilterId('colors', boxId)}
                  colorItems={colors}
                />
              </div>
              <div className={classes.size}>
                <ButtonList 
                  checkedBoxIds={selectBox.sizes}
                  onChangeBoxId={(boxId) => onPushFilterId('sizes', boxId)}
                  heading='Size'
                  buttonItems={sizes}
                />
              </div>
              <div className={classes.quantity}>
                <h3>Quantity</h3>
                <QuantityControl />
              </div>
              <div className={classes.button}>
                <CommonButton
                  callback={test}
                  text={'Add to Cart'}
                />
              </div>
            </div>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  )
})

export default detail
