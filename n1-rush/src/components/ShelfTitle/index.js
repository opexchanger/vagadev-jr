import style from './shelf-title.module.scss';

export default function SectionTitle({ children }) {
  return (
    <div className={style.sectionTitle}>
      <h2>{children}</h2>
    </div>
  );
}
