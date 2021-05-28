import Image from 'next/image';
import Button from '../Button';

import style from './shelf.module.scss';

export default function Shelf({ item, labelText, handleBuy }) {
  const { name, price, cover } = item;
  return (
    <article className={style.shelfWrapper} aria-label={labelText}>
      <header className={style.shelfHead}>
        <Image
          src={`/img/products/${cover}`}
          alt={labelText}
          width={237}
          height={245}
          className={style.shelfImage}
        />
      </header>
      <div className={style.shelfBody}>
        <h3 className={style.name}>{name}</h3>
        <span className={style.price}>R$ {price}</span>
        <Button
          styles={{ marginTop: '2rem', alignSelf: 'center' }}
          handleClick={() => handleBuy(item)}
        >
          {item.bought ? 'Comprado!' : 'Comprar'}
        </Button>
      </div>
    </article>
  );
}
