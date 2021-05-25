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
  // cria estado para a visibilidade do dropdown
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className={style.header}>
      <Container flex justify='space-between'>
        <div className={style.panelLeft}>
          <IconButton
            labelText='Abrir o menu'
            icon={<HamburgerMenu fill='#ffffff' height='100%' />}
            iconActive={<CloseMenu fill='#ffffff' height='100%' />}
            toggler={menuVisible}
            onClick={() => setMenuVisible(!menuVisible)}
          />
          <Link href='/'>
            <a className={style.logoWrapper}>
              <Logo />
            </a>
          </Link>
        </div>

        {menuVisible && (
          <DropdownMenu labelText='Navegue nossos títulos por categoria'>
            <DropdownMenu.Title>Luta</DropdownMenu.Title>
            <DropdownMenu.List>
              <DropdownMenu.ListItem>Mortal Kombat</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Smash Bros</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Tekken</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>DBZ</DropdownMenu.ListItem>
            </DropdownMenu.List>

            <DropdownMenu.Title>Luta</DropdownMenu.Title>
            <DropdownMenu.List>
              <DropdownMenu.ListItem>Mortal Kombat</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Smash Bros</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Tekken</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>DBZ</DropdownMenu.ListItem>
            </DropdownMenu.List>
          </DropdownMenu>
        )}

        <div className={style.panelRight}>
          <IconButton
            labelText='Abrir a tela de contato'
            icon={
              <PaperPlane
                fill='#ffffff'
                height='100%'
                style={{ marginTop: '1px' }}
              />
            }
          />
          <IconButton
            labelText='Procurar algum game'
            icon={<Search fill='#ffffff' height='100%' />}
          />
          <IconButton
            labelText='Ver o seu carrinho'
            icon={<ShoppingBag fill='#ffffff' height='100%' />}
          />
        </div>
      </Container>
    </header>
  );
}
