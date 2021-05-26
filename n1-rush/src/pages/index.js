import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Container from '../components/Container';
import ShelfTitle from '../components/ShelfTitle';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container width='90'>
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
          <ShelfTitle>Produtos em destaque</ShelfTitle>
        </Container>
      </main>
    </>
  );
}
