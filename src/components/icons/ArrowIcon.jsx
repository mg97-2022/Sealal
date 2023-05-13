const ArrowIcon = ({ reverse, ...restProps }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    style={{
      transform: reverse && "rotate(180deg)",
    }}
  >
    <path
      d="M18.8633 24.9001L10.7133 16.7501C9.75078 15.7876 9.75078 14.2126 10.7133 13.2501L18.8633 5.1001"
      stroke="#292D32"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowIcon;
