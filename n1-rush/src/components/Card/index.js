import Image from 'next/image';
import Link from 'next/link';

import style from './card.module.scss';

export default function Card({ gameName, imageSrc, altText, ...restProps }) {
  return (
    <article className={style.cardWrapper} {...restProps}>
      <Link href='/'>
        <a>
          <div className={style.imageWrapper}>
            <Image
              src={imageSrc}
              alt={altText}
              width={588}
              height={357}
              className={style.cardImage}
            />
          </div>

          <footer className={style.cardFooter}>
            <h4 className={style.cardTitle}>{gameName}</h4>
          </footer>
        </a>
      </Link>
    </article>
  );
}
