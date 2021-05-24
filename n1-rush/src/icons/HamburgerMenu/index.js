export default function HamburgerMenu({ fill, width, height, ...restProps }) {
  return (
    <svg
      width={width || '30'}
      height={height || '24'}
      viewBox='0 0 30 24'
      fill={fill || '#ffffff'}
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path d='M28.5 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H28.5C29.3284 3 30 2.32843 30 1.5C30 0.671573 29.3284 0 28.5 0Z' />
      <path d='M28.5 10.451H1.5C0.671573 10.451 0 11.1226 0 11.951C0 12.7794 0.671573 13.451 1.5 13.451H28.5C29.3284 13.451 30 12.7794 30 11.951C30 11.1226 29.3284 10.451 28.5 10.451Z' />
      <path d='M20.5 21H1.5C0.671573 21 0 21.6716 0 22.5C0 23.3284 0.671573 24 1.5 24H20.5C21.3284 24 22 23.3284 22 22.5C22 21.6716 21.3284 21 20.5 21Z' />
    </svg>
  );
}
