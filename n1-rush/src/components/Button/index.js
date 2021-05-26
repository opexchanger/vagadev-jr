import Link from 'next/link';

import style from './button.module.scss';

export default function Button({ styles, children }) {
  return (
    <Link href='/'>
      <a className={style.button} style={styles}>
        {children}
      </a>
    </Link>
  );
}
