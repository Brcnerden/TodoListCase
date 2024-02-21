const Trash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <g fill="#FF6262" clipPath="url(#a)">
      <path d="M6.875 7.375A.625.625 0 0 1 7.5 8v7.5a.625.625 0 1 1-1.25 0V8a.625.625 0 0 1 .625-.625Zm3.125 0a.625.625 0 0 1 .625.625v7.5a.624.624 0 1 1-1.25 0V8A.625.625 0 0 1 10 7.375ZM13.75 8a.625.625 0 1 0-1.25 0v7.5a.624.624 0 1 0 1.25 0V8Z" />
      <path
        fillRule="evenodd"
        d="M18.125 4.25a1.25 1.25 0 0 1-1.25 1.25h-.625v11.25a2.5 2.5 0 0 1-2.5 2.5h-7.5a2.5 2.5 0 0 1-2.5-2.5V5.5h-.625a1.25 1.25 0 0 1-1.25-1.25V3a1.25 1.25 0 0 1 1.25-1.25H7.5A1.25 1.25 0 0 1 8.75.5h2.5a1.25 1.25 0 0 1 1.25 1.25h4.375A1.25 1.25 0 0 1 18.125 3v1.25ZM5.148 5.5 5 5.574V16.75A1.25 1.25 0 0 0 6.25 18h7.5A1.25 1.25 0 0 0 15 16.75V5.574l-.148-.074H5.148ZM3.125 4.25V3h13.75v1.25H3.125Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Trash;
