import Link from "next/link";
import React from "react";
import styles from "./GlassButton.module.scss";

type GlassButtonProps = {
  href: string;
  text: string;
};

const ButtonImage = (text: string) => (
  <svg
    className={styles.image}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 287 133"
  >
    <defs>
      <clipPath id="b">
        <rect width="287" height="133" />
      </clipPath>
    </defs>
    <g id="a" clipPath="url(#b)">
      <g transform="translate(-116 -67)">
        <rect width="275" height="122" transform="translate(122 78)" fill="#fff" opacity="0.03" />
        <path d="M0,0,6,11V133H0Z" transform="translate(116 67)" fill="#fff" opacity="0.29" />
        <path d="M0,0H287l-6,11H6Z" transform="translate(116 67)" fill="#fff" opacity="0.19" />
        <path d="M5.987,0l-6,11V133h6Z" transform="translate(397.013 67)" fill="#fff" opacity="0.29" />
        <path d="M287,10.984H0l6-11H281Z" transform="translate(116 189.016)" fill="#fff" opacity="0.04" />
      </g>
    </g>
    <text x="50%" y="54%" textAnchor="middle" dominantBaseline="central" className={styles.text}>
      {text}
    </text>
  </svg>
);

const GlassButton = ({ href, text }: GlassButtonProps): JSX.Element => (
  <>
    <Link href={href}>
      <a>
        <div className={styles.button}>{ButtonImage(text)}</div>
      </a>
    </Link>
  </>
);

export default GlassButton;
