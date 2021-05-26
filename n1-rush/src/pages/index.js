import style from './index.module.scss';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Container from '../components/Container';
import ShelfTitle from '../components/ShelfTitle';
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
            <Shelf
              name='Outriders'
              price='200,00'
              imageSrc='/img/products/outriders.jpg'
              labelText='Comprar jogo Outriders'
            />
          </section>
        </Container>
        <Footer></Footer>
      </main>
    </>
  );
}
