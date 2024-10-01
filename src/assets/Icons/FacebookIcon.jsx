import * as React from "react";
const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill={props.circles[0]} stroke={props.circles[1]} />
    <path
      d="M18.1552 29.006V21.0724H15.4854V17.9805H18.1552V15.7003C18.1552 13.0542 19.7714 11.6133 22.1319 11.6133C23.2626 11.6133 24.2344 11.6975 24.5176 11.7351V14.5005L22.8805 14.5012C21.5967 14.5012 21.3481 15.1112 21.3481 16.0064V17.9805H24.4098L24.0112 21.0724H21.3481V29.006H18.1552Z"
      fill={props.fill}
    />
  </svg>
);
export default FacebookIcon;
