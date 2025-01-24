export default function SoccerBall() {
  return (
    <svg
      className="soccer-ball"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="250" cy="250" r="240" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M250 490C381.503 490 490 381.503 490 250C490 118.497 381.503 10 250 10C118.497 10 10 118.497 10 250C10 381.503 118.497 490 250 490ZM250 450C359.411 450 450 359.411 450 250C450 140.589 359.411 50 250 50C140.589 50 50 140.589 50 250C50 359.411 140.589 450 250 450Z"
        fill="black"
      />
      <path
        d="M250 50L450 250L250 450L50 250L250 50Z"
        stroke="black"
        strokeWidth="20"
      />
      <path
        d="M50 250H450"
        stroke="black"
        strokeWidth="20"
      />
      <path
        d="M250 50V450"
        stroke="black"
        strokeWidth="20"
      />
      <circle cx="250" cy="250" r="50" fill="black" />
    </svg>
  );
}
