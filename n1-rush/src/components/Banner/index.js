import Image from 'next/image';
import Link from 'next/link';

import style from './banner.module.scss';

export default function Banner({ gameName, imageSrc, altText, ...restProps }) {
  return (
    <article className={style.bannerWrapper} {...restProps} tabIndex={0}>
      {/* tabindex faz ser focado com o teclado */}
      <Link href='/'>
        <a>
          <div className={style.imageWrapper}>
            <Image
              src={imageSrc}
              alt={altText}
              width={588}
              height={357}
              className={style.bannerImage}
            />
          </div>

          <footer className={style.bannerFooter}>
            <h4 className={style.bannerTitle}>{gameName}</h4>
          </footer>
        </a>
      </Link>
    </article>
  );
}
