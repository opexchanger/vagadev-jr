import style from './button.module.scss';

export default function Button({ styles, children, handleClick }) {
  return (
    <button
      className={style.button}
      style={styles}
      onClick={handleClick ? handleClick : undefined}
    >
      {children}
    </button>
  );
}
