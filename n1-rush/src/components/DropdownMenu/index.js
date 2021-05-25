import style from './dropdown-menu.module.scss';

export default function DropdownMenu({ labelText, children, ...restProps }) {
  return (
    <div {...restProps} className={style.dropdownWrapper}>
      <div className={style.menuContainer}>
        <nav aria-label={labelText}>{children}</nav>
      </div>
    </div>
  );
}

DropdownMenu.Title = function ({ children, ...restProps }) {
  return (
    <h3 className={style.dropdownTitle} {...restProps}>
      {children}
    </h3>
  );
};

DropdownMenu.List = function ({ children, ...restProps }) {
  return (
    <ul className={style.dropdownList} {...restProps}>
      {children}
    </ul>
  );
};

DropdownMenu.ListItem = function ({ children, ...restProps }) {
  return (
    <li className={style.dropdownListItem} {...restProps}>
      {children}
    </li>
  );
};
