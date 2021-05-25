import style from './container.module.scss';

export default function Container({ flex, justify, align, children }) {
  // monta um objeto de estilos dependendo das props passadas
  // não contém todas as possibilidades pq por enquanto ta contida no caso de uso da aplicação
  const styles = {};
  if (flex) styles.display = 'flex';
  if (justify) styles.justifyContent = justify;
  if (align) styles.alignItems = align;

  return (
    <div className={`${style.container}`} style={styles}>
      {children}
    </div>
  );
}

// style={`
//     ${flex && 'display: flex'}
//     ${flex && justify ? `justify-content: ${justify}` : ''}
//     ${flex && align ? `align-items: ${align}` : ''}
//   `}
