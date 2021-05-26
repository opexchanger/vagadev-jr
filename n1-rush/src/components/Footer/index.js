import Image from 'next/image';

import style from './footer.module.scss';

export default function Logo() {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.logoBox}>
        <Image
          src='/img/logo_footer.png'
          alt='Agência N1'
          width={43}
          height={28}
          className={style.logo}
        />
      </div>
      <div className={style.copyright}>
        <p>Agência N1 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
