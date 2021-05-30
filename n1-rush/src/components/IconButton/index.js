import style from './icon-button.module.scss';

// recebe o icon para exiber no botão e possíveis opções para alterná-lo

export default function IconButton({
  width,
  height,
  labelText,
  icon,
  iconActive,
  sideText,
  handleClick,
  toggler,
  ...restProps
}) {
  return (
    <button
      // se passou algum texto pra ser exibido, coloca a classe pra lidar com ele
      className={`${style.button} ${sideText && style.withText}`}
      aria-label={labelText}
      onClick={handleClick ? handleClick : undefined}
      {...restProps}
    >
      {!toggler ? icon : iconActive}
      {sideText && <span>{sideText}</span>}
    </button>
  );
}

// toggler, onClick e iconActive como valores opcionais, se não forem enviados o ícone
// exibido será sempre o icon
