import React from "react";

function SearchIcon({ onClick }) {
  return (
    <svg
      className="cur"
      onClick={onClick}
      width="19"
      height="19"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M18.7678 18.1486L13.3648 12.7455C14.4114 11.4527 15.0415 9.81002 15.0415 8.02088C15.0415 3.87417 11.6674 0.500107 7.52074 0.500107C3.37403 0.500107 0 3.87414 0 8.02085C0 12.1676 3.37406 15.5416 7.52077 15.5416C9.30991 15.5416 10.9526 14.9115 12.2454 13.8649L17.6485 19.268C17.8028 19.4223 18.0055 19.4999 18.2082 19.4999C18.4109 19.4999 18.6135 19.4223 18.7679 19.268C19.0774 18.9584 19.0774 18.4581 18.7678 18.1486ZM7.52077 13.9583C4.24646 13.9583 1.58333 11.2952 1.58333 8.02085C1.58333 4.74653 4.24646 2.0834 7.52077 2.0834C10.7951 2.0834 13.4582 4.74653 13.4582 8.02085C13.4582 11.2952 10.795 13.9583 7.52077 13.9583Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="19"
            height="19"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;
