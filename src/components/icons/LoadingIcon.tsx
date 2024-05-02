import * as React from "react";
import { SVGProps } from "react";

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width={200}
    height={200}
    style={{
      shapeRendering: "auto",
      display: "block",
    }}
    {...props}
  >
    <path fill="var(--primary-color)" d="M10 50a40 40 0 0 0 80 0 40 42 0 0 1-80 0">
      <animateTransform
        values="0 50 51;360 50 51"
        keyTimes="0;1"
        repeatCount="indefinite"
        dur="1s"
        type="rotate"
        attributeName="transform"
      />
    </path>
  </svg>
);

export default LoadingIcon;
