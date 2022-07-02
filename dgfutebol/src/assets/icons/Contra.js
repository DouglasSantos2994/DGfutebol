export const Contra = ({ width, stroke }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={width}
      viewBox="0 0 14 14"
      fill={stroke ? stroke : "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        fill={stroke ? stroke : "black"}
      />
    </svg>
  );
};
