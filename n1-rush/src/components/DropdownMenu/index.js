import style from './dropdown-menu.module.scss';

export default function DropdownMenu({ labelText, children, ...restProps }) {
  return (
    <div {...restProps} className={style.dropdownWrapper}>
      <span className={style.arrow}></span>
      <div className={style.menuContainer}>
        <nav aria-label={labelText} className={style.nav}>
          {children}
        </nav>
      </div>
    </div>
  );
}

// DropdownMenu.Title = function ({ children, ...restProps }) {
//   return (

//   );
// };

DropdownMenu.List = function ({ title, children, ...restProps }) {
  return (
    <div className={style.listWrapper} {...restProps}>
      <h3 className={style.dropdownTitle}>{title}</h3>
      <ul className={style.dropdownList}>{children}</ul>
    </div>
  );
};

DropdownMenu.ListItem = function ({ children, ...restProps }) {
  return (
    <li className={style.dropdownListItem} {...restProps}>
      {children}
    </li>
  );
};
