import { useRef } from 'react';
// @ts-ignore spilideの型定義を無視
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import classes from '@/styles/common/slider.module.scss'
import { CommonCard } from './CommonCard';
import { SliderArrow } from '../icon/SliderArrow';
import { Item } from '../../../public/const/allItems';

type SliderProps = {
  items: Item[];
  perPage?: number;
  gap?: number;
  rewind?: boolean;
  pagination?: boolean;
  href?: string;
}

export const CommonSlider = ({ items, perPage = 4, gap = 20,  rewind }: SliderProps) => {
  const splideRef = useRef<Splide | null>(null);
  const options = {
    perPage: perPage,
    gap: gap,
    rewind: rewind,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 0,
        rewind: true
      }
    }
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
      <Splide
        ref={splideRef}
        hasTrack={false}
        className={classes.slider}
        options={options}
      >
        <SplideTrack>
          {items.map((item: any) => 
            <SplideSlide 
              className={classes.slider_slide}
              key={item.name}
            >
              <CommonCard 
                item={item}
                href={`/products/${item.id}`}
              />
            </SplideSlide>
          )}
        </SplideTrack>
        <div className={classes.slider_arrows}>
          <button 
            onClick={goToPrevSlide}
            className={`${classes.slider_arrow} ${classes.slider_arrow_prev}`}
          >
            <SliderArrow />
          </button>
          <button
            onClick={goToNextSlide}
            className={`${classes.slider_arrow} ${classes.slider_arrow_next}`}
          >
            <SliderArrow />
          </button>
        </div>
      </Splide>
    </>
  )
}