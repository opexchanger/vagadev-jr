import { useState } from 'react';

import DropwdownCart from '../DropdownCart';

import style from './shop-bag.module.scss';
import ShoppingBag from '../../icons/shopping-bag-solid.svg';

export default function ShopBag({ cart }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div
        className={style.buttonWrapper}
        aria-label='Sua sacola de compras'
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <ShoppingBag fill='#ffffff' height='100%' />
        {cart.length > 0 && <span className={style.bullet}>{cart.length}</span>}

        {showDropdown && (
          <DropwdownCart
            cart={cart}
            show={showDropdown}
            setShow={setShowDropdown}
          />
        )}
      </div>
    </>
  );
}
