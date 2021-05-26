import style from './shelf-title.module.scss';

export default function ShelfTitle({ children, ...restProps }) {
  return (
    <div className={style.shelfTitle} {...restProps}>
      <h2>{children}</h2>
    </div>
  );
}
