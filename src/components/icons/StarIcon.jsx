const StarIcon = ({ fill, stroke, ...restProps }) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      {...restProps}
    >
      <path
        d="M9.43167 0L12.3312 5.49555L18.4537 6.55491L14.1231 11.0107L15.0076 17.161L9.43167 14.4193L3.85573 17.161L4.7402 11.0107L0.409608 6.55491L6.53218 5.49555L9.43167 0Z"
        fill={fill}
        stroke={stroke}
        // fill="#F5BC4C"
        // stroke="#9B9B9B"

      />
    </svg>
    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M9.37698 1.07149L11.8342 5.72887L11.949 5.94631L12.1912 5.98823L17.38 6.88602L13.7099 10.6622L13.5385 10.8385L13.5735 11.0819L14.3231 16.2941L9.5976 13.9706L9.37698 13.8621L9.15635 13.9706L4.43085 16.2941L5.18042 11.0819L5.21541 10.8385L5.04406 10.6622L1.37397 6.88602L6.56274 5.98823L6.80499 5.94631L6.91971 5.72887L9.37698 1.07149Z"
        stroke="#9B9B9B"
      />
    </svg> */}
  </>
);

export default StarIcon;
