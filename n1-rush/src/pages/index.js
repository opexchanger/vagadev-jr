import style from './index.module.scss';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from '../components/Container';
import ShelfTitle from '../components/ShelfTitle';
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ShelfSlider from '../components/ShelfSlider';

import featured from '../data/featured.json';
import slides from '../data/slides.json';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={style.sectionHero}>
          <Carousel items={slides} />
        </section>

        <Container width='90'>
          <section className={style.sectionBanners}>
            <Banner
              gameName='The legend of Zelda - Breath of the Wild'
              altText='The legend of Zelda - Breath of the Wild'
              imageSrc='/img/zelda_banner.jpg'
            />
            <Banner
              gameName='SEKIRO - Shadows die twice'
              altText='SEKIRO - Shadows die twice'
              imageSrc='/img/sekiro_banner.jpg'
            />
          </section>

          <section className={style.sectionProducts}>
            <ShelfTitle>Produtos em destaque</ShelfTitle>
            <div className={style.productsWrapper}>
              {featured.map(({ id, name, price, cover }) => (
                <Shelf
                  key={id}
                  name={name}
                  price={price}
                  imageSrc={`/img/products/${cover}`}
                  labelText={`Comprar jogo ${name}`}
                />
              ))}
            </div>
          </section>
        </Container>

        <Footer></Footer>
      </main>
    </>
  );
}
