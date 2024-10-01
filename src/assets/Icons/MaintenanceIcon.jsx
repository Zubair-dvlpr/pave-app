import * as React from "react";
const MaintenanceIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    {...props}
  >
    <path
      d="M41.8748 19.2084C38.104 19.2084 36.5623 16.5417 38.4373 13.2709C39.5207 11.3751 38.8748 8.9584 36.979 7.87507L33.3748 5.81257C31.729 4.8334 29.604 5.41674 28.6248 7.06257L28.3957 7.4584C26.5207 10.7292 23.4373 10.7292 21.5415 7.4584L21.3123 7.06257C20.3748 5.41674 18.2498 4.8334 16.604 5.81257L12.9998 7.87507C11.104 8.9584 10.4582 11.3959 11.5415 13.2917C13.4373 16.5417 11.8957 19.2084 8.12484 19.2084C5.95817 19.2084 4.1665 20.9792 4.1665 23.1667V26.8334C4.1665 29.0001 5.93734 30.7917 8.12484 30.7917C11.8957 30.7917 13.4373 33.4584 11.5415 36.7292C10.4582 38.6251 11.104 41.0417 12.9998 42.1251L16.604 44.1876C18.2498 45.1667 20.3748 44.5834 21.354 42.9376L21.5832 42.5417C23.4582 39.2709 26.5415 39.2709 28.4373 42.5417L28.6665 42.9376C29.6457 44.5834 31.7707 45.1667 33.4165 44.1876L37.0207 42.1251C38.9165 41.0417 39.5623 38.6042 38.479 36.7292C36.5832 33.4584 38.1248 30.7917 41.8957 30.7917C44.0623 30.7917 45.854 29.0209 45.854 26.8334V23.1667C45.8332 21.0001 44.0623 19.2084 41.8748 19.2084ZM24.9998 31.7709C21.2707 31.7709 18.229 28.7292 18.229 25.0001C18.229 21.2709 21.2707 18.2292 24.9998 18.2292C28.729 18.2292 31.7707 21.2709 31.7707 25.0001C31.7707 28.7292 28.729 31.7709 24.9998 31.7709Z"
      fill={props.color}
    />
  </svg>
);
export default MaintenanceIcon;
