import React from 'react';

function CloseIcon({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`${width} ${height}`}
      viewBox="0 0 24 24"
      color={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

export default CloseIcon;
