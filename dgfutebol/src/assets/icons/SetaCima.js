export const SetaCima = ({ width, stroke }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={width}
      viewBox="0 0 10 5"
      fill={stroke ? stroke : "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 5L5 0L10 5H0Z" fill={stroke ? stroke : "black"} />
    </svg>
  );
};
