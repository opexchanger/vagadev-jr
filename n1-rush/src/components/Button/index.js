import style from './button.module.scss';

export default function Button({ styles, handleClick, purchased, children }) {
  return (
    <button
      className={`${style.button} ${purchased && style.purchased}`}
      style={styles}
      onClick={handleClick ? handleClick : undefined}
    >
      <span>{children}</span>
      {purchased && (
        <img src='/img/mario.png' className={style.buttonImg}></img>
      )}
    </button>
  );
}
