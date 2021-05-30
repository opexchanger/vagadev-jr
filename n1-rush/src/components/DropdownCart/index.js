import style from './dropdown-cart.module.scss';

export default function DropdownCart({ cart }) {
  return (
    <div className={style.dropdownWrapper}>
      <span className={style.arrow}></span>
      <div className={style.itemsWrapper}>
        {cart.length ? (
          cart.map(({ id, name, cover, price, quantity }) => (
            <div className={style.cartItem} key={id}>
              <img src={`/img/products/${cover}`} alt='Item do carrinho' />
              <div className={style.itemDetails}>
                <p className={style.itemName}>{name}</p>
                <span className={style.itemPrice}>
                  {quantity}x ${price}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className={style.emptyMessage}>
            Nenhum item ainda. <br />
            Vá comprar!
          </div>
        )}
      </div>
    </div>
  );
}
