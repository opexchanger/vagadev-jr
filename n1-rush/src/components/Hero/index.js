import IconButton from '../IconButton';
import ChevronLeft from '../../icons/angle-left-solid.svg';
import ChevronRight from '../../icons/angle-right-solid.svg';

import style from './hero.module.scss';

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.sliderImage}>
        <div className={style.heroOverlay}>
          <h2 className={style.heroTitle}>MORTAL KOMBAT</h2>
          <h2 className={style.heroPrice}>
            R$ 299<span>,99</span>
          </h2>
          <p className={style.heroText}>
            Mortal Kombat X combina uma apresentação cinemática única com uma
            jogabilidade totalmente nova. Os jogadores podem escolher pela
            primeira vez diversas variantes de cada personagem, afetando tanto a
            estratégia como o estilo de luta.
          </p>
        </div>
      </div>

      <div className={style.sliderInfo}>
        <div className={style.sliderTitle}>
          <h4>Mortal Kombat</h4>
        </div>
        <div className={style.sliderControl}>
          <div className={style.sliderCounters}>
            <h4>1/2</h4>
          </div>
          <div className={style.sliderChevrons}>
            <IconButton
              labelText='Slide anterior'
              width='auto'
              height='auto'
              icon={<ChevronLeft fill='#ffffff' />}
            />
            <IconButton
              labelText='Próximo slide'
              width='auto'
              height='auto'
              icon={<ChevronRight fill='#ffffff' />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
