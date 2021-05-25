import Image from 'next/image';

import style from './logo.module.scss';

export default function Logo() {
  return (
    <div className={style.logo}>
      <Image
        src='/icons/logo-n1-rush.svg'
        alt='N1 Rush - Home'
        width={200}
        height={50}
        className={style.logo}
      />
    </div>
  );
}
