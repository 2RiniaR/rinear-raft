import Link from "next/link";
import React from "react";
import styles from "./CloseButton.module.scss";

const ButtonImage = () => (
  <svg
    className={styles.image}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 126 129"
  >
    <defs>
      <clipPath id="b">
        <rect width="126" height="129" />
      </clipPath>
    </defs>
    <g id="a" clipPath="url(#b)">
      <rect width="122" height="122" fill="#fff" opacity="0.03" />
      <path d="M0,129l4-7V7L0,0Z" fill="#fff" opacity="0.07" />
      <path d="M0,7H126l-4-7H0Z" transform="translate(0 122)" fill="#fff" opacity="0.19" />
      <path d="M3.987,129l-4-7V0h4Z" transform="translate(122.013)" fill="#fff" opacity="0.29" />
      <path d="M126-.016H0l4,7H122Z" transform="translate(0 0.016)" fill="#fff" opacity="0.04" />
      <path d="M28,0,56,49H0Z" transform="translate(34.5 92.5) rotate(-90)" fill="#fef9cd" opacity="0.42" />
    </g>
  </svg>
);

const CloseButton = () => (
  <>
    <Link href={""}>
      <a>
        <div className={styles.button}>
          <ButtonImage />
        </div>
      </a>
    </Link>
  </>
);

export default CloseButton;
