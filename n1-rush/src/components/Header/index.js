import Link from 'next/link';

// components
import Container from '../Container';
import IconButton from '../IconButton';
import DropdownMenu from '../DropdownMenu';
import Logo from '../Logo';
import ShopBag from '../ShopBag';

// icons
import HamburgerMenu from '../../icons/hamburger-menu.svg';
import CloseMenu from '../../icons/close-menu.svg';
import PaperPlane from '../../icons/paper-plane.svg';
import Search from '../../icons/search-solid.svg';

import style from './header.module.scss';

import { useState } from 'react';

export default function Header({ cart, categories, games }) {
  // cria estado para a visibilidade do dropdown
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header
      className={style.header}
      style={showMenu ? { position: 'fixed' } : {}}
    >
      <Container flex justify='space-between'>
        <div className={style.panelLeft}>
          {/* botão do menu recebendo state e função pra alternar */}
          <IconButton
            labelText='Abrir o menu'
            icon={<HamburgerMenu fill='#ffffff' height='100%' />}
            iconActive={<CloseMenu fill='#ffffff' height='100%' />}
            toggler={showMenu}
            onClick={toggleMenu}
          />
          <Link href='/'>
            <a className={style.logoWrapper}>
              <Logo />
            </a>
          </Link>
        </div>

        {/* menu exibido condicionalmente a partir do state */}
        {showMenu && (
          <DropdownMenu labelText='Navegue nossos títulos por categoria'>
            <DropdownMenu.List title='Luta'>
              <DropdownMenu.ListItem>Mortal Kombat</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Smash Bros</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Tekken</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>DBZ</DropdownMenu.ListItem>
            </DropdownMenu.List>

            <DropdownMenu.List title='Ação / Aventura'>
              <DropdownMenu.ListItem>GTA V</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Tomb Raider</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>HALO</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Call of Duty</DropdownMenu.ListItem>
            </DropdownMenu.List>

            <DropdownMenu.List title='Corrida'>
              <DropdownMenu.ListItem>NEED For SPEED</DropdownMenu.ListItem>
              <DropdownMenu.ListItem>Forza Horizon</DropdownMenu.ListItem>
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
          <ShopBag cart={cart} />
        </div>
      </Container>
    </header>
  );
}
