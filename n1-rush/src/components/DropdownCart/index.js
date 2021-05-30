import style from './dropdown-cart.module.scss';

export default function DropdownCart({ cart }) {
  return (
    <div className={style.dropdownWrapper}>
      <span className={style.arrow}></span>
      <div className={style.itemsWrapper}>
        {cart.length ? (
          cart.map(({ id, name, cover, price }) => (
            <div className={style.cartItem} key={id}>
              <img src={`/img/products/${cover}`} alt='Item do carrinho' />
              <div className={style.itemDetails}>
                <p className={style.itemName}>{name}</p>
                <span className={style.itemPrice}>1x ${price}</span>
              </div>
            </div>
          ))
        ) : (
          <div className={style.emptyMessage}>
            Nenhum item ainda. Vá comprar!
          </div>
        )}
      </div>
    </div>
  );
}
