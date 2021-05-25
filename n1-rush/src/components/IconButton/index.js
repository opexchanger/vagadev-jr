import style from './icon-button.module.scss';

// recebe o icon para exiber no botão e possíveis opções para alterná-lo

export default function IconButton({
  width,
  height,
  labelText,
  icon,
  iconActive,
  handleClick,
  toggler,
  ...restProps
}) {
  return (
    <button
      className={style.button}
      aria-label={labelText}
      onClick={handleClick ? handleClick : undefined}
      // padrão pré definido por ser utilizado a maioria das vezes
      style={{
        width: `${width ? width : '32px'}`,
        height: `${height ? height : '24px'}`,
      }}
      {...restProps}
    >
      {!toggler ? icon : iconActive}
    </button>
  );
}

// toggler, onClick e iconActive como valores opcionais, se não forem enviados o ícone
// exibido será sempre o icon
