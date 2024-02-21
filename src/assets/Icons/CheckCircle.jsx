const CheckCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <g fill="#05FF00" clipPath="url(#a)">
      <path d="M10 19.25a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5Zm0 1.25a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M13.713 6.713a.288.288 0 0 0-.025.027l-4.342 5.531L6.73 9.654a.938.938 0 0 0-1.325 1.325l3.308 3.309a.939.939 0 0 0 1.348-.026l4.99-6.237a.938.938 0 0 0-1.338-1.313Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CheckCircle;
