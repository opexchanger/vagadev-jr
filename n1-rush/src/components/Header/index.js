import Link from 'next/link';

import Container from '../Container';
import IconButton from '../IconButton';
import DropdownMenu from '../DropdownMenu';
import Logo from '../Logo';

// icons
import HamburgerMenu from '../../icons/hamburger-menu.svg';
import CloseMenu from '../../icons/close-menu.svg';
import PaperPlane from '../../icons/paper-plane.svg';
import Search from '../../icons/search-solid.svg';
import ShoppingBag from '../../icons/shopping-bag-solid.svg';

import style from './header.module.scss';

import { useState } from 'react';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className={style.header}>
      <Container flex justify='space-between'>
        <div className={style.panelLeft}>
          <button
            className={style.button}
            aria-label='Abrir o menu'
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {menuVisible ? (
              <CloseMenu fill='#ffffff' height='100%' />
            ) : (
              <HamburgerMenu fill='#ffffff' height='100%' />
            )}
          </button>
          <Link href='/'>
            <a className={style.logoWrapper}>
              <Logo />
            </a>
          </Link>
        </div>

        {menuVisible && (
          <DropdownMenu>
            <h3>Luta</h3>
            <ul>
              <li>Mortal Kombat</li>
              <li>Smash Bros</li>
              <li>Tekken</li>
              <li>DBZ</li>
            </ul>
            <h3>Luta</h3>
            <ul>
              <li>Mortal Kombat</li>
              <li>Smash Bros</li>
              <li>Tekken</li>
              <li>DBZ</li>
            </ul>
          </DropdownMenu>
        )}

        <div className={style.panelRight}>
          <button className={style.button} aria-label='Abrir a tela de contato'>
            <PaperPlane
              fill='#ffffff'
              height='100%'
              style={{ marginTop: '1px' }}
            />
          </button>
          <button className={style.button} aria-label='Abrir a tela de contato'>
            <Search fill='#ffffff' height='100%' />
          </button>
          <button className={style.button} aria-label='Abrir a tela de contato'>
            <ShoppingBag fill='#ffffff' height='100%' />
          </button>
        </div>
      </Container>
    </header>
  );
}
