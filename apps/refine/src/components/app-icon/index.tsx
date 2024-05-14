"use client";

import React from "react";

export const AppIcon: React.FC = () => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 16 16"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path
          clipRule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.333 4a2.667 2.667 0 0 1 5.334 0v8a2.667 2.667 0 1 1-5.334 0z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};
