import { useState } from 'react';

import style from './index.module.scss';

// import components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from '../components/Container';
import ShelfTitle from '../components/ShelfTitle';
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal/modal';

// import data
import featured from '../data/featured.json';
import slides from '../data/slides.json';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (item) => {
    // atualiza o carrinho
    setCart((prevCart) => {
      return [...prevCart, item];
    });
    // marca o item como comprado
    item.purchased = true;
    // abre a modal
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Header cart={cart} />
      <main>
        <Modal showModal={showModal} setShowModal={setShowModal} />
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
              {featured.map((item) => (
                <Shelf
                  key={item.id}
                  item={item}
                  labelText={`Comprar jogo ${item.name}`}
                  handleBuy={addToCart}
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
