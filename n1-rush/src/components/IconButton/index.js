import style from './icon-button.module.scss';

export default function IconButton({
  labelText,
  iconOpen,
  iconClose,
  handleClick,
  toggler,
  ...restProps
}) {
  return (
    <button
      className={style.button}
      aria-label={labelText}
      onClick={handleClick ? handleClick : 'undefined'}
      {...restProps}
    >
      {toggler ? iconClose : iconOpen}
    </button>
  );
}
