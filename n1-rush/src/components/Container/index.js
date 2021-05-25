import style from './container.module.scss';

export default function Container({ width, flex, justify, align, children }) {
  // monta um objeto de estilos dependendo das props passadas
  // não contém possibilidades em aberto pq por enquanto ta contida no caso de uso da aplicação
  const styles = {};
  if (width) styles.maxWidth = `${width}%`;
  if (flex) styles.display = 'flex';
  if (justify) styles.justifyContent = justify;
  if (align) styles.alignItems = align;

  return (
    <div className={`${style.container}`} style={styles}>
      {children}
    </div>
  );
}
