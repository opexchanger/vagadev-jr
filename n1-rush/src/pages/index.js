import style from './index.module.scss';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from '../components/Container';
import ShelfTitle from '../components/ShelfTitle';
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const games = [
  {
    id: 1,
    name: 'Mortal Kombat',
    coverSm: 'principal_banner_mobile.jpg',
    coverBg: 'principal_banner_desktop.jpg',
    description:
      'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.',
    price: 299.99,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Red Dead Redemption\u00A02',
    coverSm: 'principal_banner_mobile_02.jpg',
    coverBg: 'principal_banner_desktop_02.jpg',
    description:
      'Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.',
    price: 159.0,
    categoryId: 1,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={style.sectionHero}>
          <Carousel items={games} />
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
