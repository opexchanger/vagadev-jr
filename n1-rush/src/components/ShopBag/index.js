import style from './shop-bag.module.scss';
import ShoppingBag from '../../icons/shopping-bag-solid.svg';

export default function ShopBag({ cart }) {
  return (
    <>
      <div className={style.buttonWrapper} aria-label='Sua sacola de compras'>
        <ShoppingBag fill='#ffffff' height='100%' />
        {cart.length > 0 && <span>{cart.length}</span>}
      </div>
    </>
  );
}

// toggler, onClick e iconActive como valores opcionais, se não forem enviados o ícone
// exibido será sempre o icon
