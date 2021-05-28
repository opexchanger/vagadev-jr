import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y, Autoplay } from 'swiper';

import Image from 'next/image';
import { useRef, useState } from 'react';

import IconButton from '../IconButton';
import ChevronLeft from '../../icons/angle-left-solid.svg';
import ChevronRight from '../../icons/angle-right-solid.svg';

import style from './carousel.module.scss';

SwiperCore.use([Navigation, A11y, Autoplay]);

// função pra transformar o valor da api em string
const formatPrice = (price) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(price)
    .split(',');

export default function Carousel({ items }) {
  // referência para pegar os chevrons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // cria state para guardar o nome e a posição do slide atual
  const [currentSlide, setCurrentSlide] = useState({ index: 0, title: '' });

  const updateSlide = (i) => {
    setCurrentSlide({
      index: i + 1,
      title: items[i].name,
    });
  };

  return (
    <Swiper
      slidesPerView={1}
      // a cada slide, pega o seu index e atualiza o state a partir desse valor
      onSlideChange={({ realIndex }) => updateSlide(realIndex)}
      loop={true}
      autoplay={{
        delay: 4000,
      }}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }}
    >
      {items.map(({ name, coverSm, coverBg, price, description }, i) => (
        // coloca o Slide atual dentro do array de refs usando o seu index, que depois é resgatado pelo onSlideChange
        <SwiperSlide key={`slide_${i}`} data-title={name}>
          <div className={style.sliderImage}>
            <Image
              className={style.sliderImage__mobile}
              src={`/img/${coverSm}`}
              sizes='100vw'
              alt={name}
              layout='fill'
              objectFit='cover'
            />
            <Image
              className={style.sliderImage__desktop}
              src={`/img/${coverBg}`}
              sizes='100vw'
              alt={name}
              layout='fill'
              objectFit='cover'
            />
            <div className={style.container}>
              <div className={style.heroOverlay}>
                <h2 className={style.heroTitle}>{name}</h2>
                <h2 className={style.heroPrice}>
                  {formatPrice(price)[0]}
                  <span>,{formatPrice(price)[1]}</span>
                </h2>
                <p className={style.heroText}>{description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* barra embaixo dos slides com nome e navegação */}
      <div className={style.sliderInfo}>
        <div className={style.sliderTitle}>
          {/* recuperando o título do item do state */}
          <h4>{currentSlide.title}</h4>
          <span className={style.title__line}></span>
        </div>
        <div className={style.sliderControl}>
          <div className={style.sliderCounters}>
            <h4>
              {/* números para display na navegação */}
              {currentSlide.index}/{items.length}
            </h4>
          </div>
          <div className={style.sliderChevrons}>
            <span ref={prevRef}>
              <IconButton
                labelText='Slide anterior'
                width='auto'
                height='auto'
                icon={<ChevronLeft fill='#ffffff' />}
              />
            </span>

            <span ref={nextRef}>
              <IconButton
                labelText='Próximo slide'
                width='auto'
                height='auto'
                icon={<ChevronRight fill='#ffffff' />}
              />
            </span>
          </div>
        </div>
      </div>
    </Swiper>
  );
}
