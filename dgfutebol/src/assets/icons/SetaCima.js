export const SetaCima = ({ width, stroke }) => {
    return (
        <svg width={width ? width : '24'} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L12 3L9 6" stroke={stroke ? stroke : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 21V3" stroke={stroke ? stroke : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}