import Header from '../components/Header';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Container from '../components/Container';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container width='90'>
          <Card
            gameName='The legend of Zelda - Breath of the Wild'
            altText='The legend of Zelda - Breath of the Wild'
            imageSrc='/img/zelda_banner.jpg'
          />
          <Card
            gameName='SEKIRO - Shadows die twice'
            altText='SEKIRO - Shadows die twice'
            imageSrc='/img/sekiro_banner.jpg'
          />
        </Container>
      </main>
    </>
  );
}
