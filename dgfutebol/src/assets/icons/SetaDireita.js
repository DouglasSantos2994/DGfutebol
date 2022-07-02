export const SetaDireita = ({ width, stroke }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={width}
      viewBox="0 0 13 20"
      fill={stroke ? stroke : "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.879883 2.12L8.75988 10L0.879883 17.88L2.99988 20L12.9999 10L2.99988 0L0.879883 2.12Z"
        fill={stroke ? stroke : "black"}
      />
    </svg>
  );
};
