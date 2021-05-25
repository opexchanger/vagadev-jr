import style from './dropdown-menu.module.scss';

export default function DropdownMenu({ title, ...restProps }) {
  return (
    <div {...restProps} className={style.dropdownWrapper}>
      <div className={style.menuContainer}>{children}</div>
    </div>
  );
}
