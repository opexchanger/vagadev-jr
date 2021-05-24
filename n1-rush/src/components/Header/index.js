import Link from 'next/link';

import Container from '../Container';
import IconButton from '../IconButton';
import DropdownMenu from '../DropdownMenu';
import { HamburgerMenu, CloseMenu } from '../../icons';

import style from './header.module.scss';

import { useState } from 'react';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className={style.header}>
      <Container>
        <IconButton
          labelText='Abrir o menu'
          iconOpen={<HamburgerMenu fill='#ffffff' />}
          iconClose={<CloseMenu fill='#ffffff' />}
          toggler={menuVisible}
          handleClick={() => setMenuVisible(!menuVisible)}
        />

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
      </Container>
    </header>
  );
}
