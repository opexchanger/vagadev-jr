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
import categories from '../data/categories.json';
import games from '../data/games.json';

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
    setShowModal(true);
  };

  return (
    <>
      {/* Navbar do site, passando o carrinho */}
      <Header cart={cart} categories={categories} games={games} />

      <main>
        {/* Modal quando a compra é realizada */}
        <Modal showModal={showModal} setShowModal={setShowModal} />

        {/* Slides do cabeçalho */}
        <section className={style.sectionHero}>
          <Carousel items={slides} />
        </section>

        {/* conter a expansão do layout */}
        <Container width='90'>
          {/* banners */}
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

          {/* produtos em destaque */}
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
      </main>
      <Footer />
    </>
  );
}
