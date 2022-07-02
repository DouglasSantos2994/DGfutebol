export const SetaBaixo = ({ width, stroke }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={width}
      viewBox="0 0 10 5"
      fill={stroke ? stroke : "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L5 5L10 0H0Z" fill={stroke ? stroke : "black"} />
    </svg>
  );
};
