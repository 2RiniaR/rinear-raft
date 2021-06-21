import React, { useState } from "react";
import styles from "./MenuButton.module.scss";
import MenuButton from "./MenuButton";

const Material = (): JSX.Element => (
  <g id="HomeButton" clipPath="url(#HomeButton_clip)">
    <g transform="translate(-116 -67)">
      <rect width="283" height="122" transform="translate(118 78)" fill="#fff" opacity="0.03" />
      <path d="M0,0,2,11V133H0Z" transform="translate(116 67)" fill="#fff" opacity="0.29" />
      <path d="M0,0H287l-2,11H2Z" transform="translate(116 67)" fill="#fff" opacity="0.19" />
      <path d="M1.987,0l-2,11V133h2Z" transform="translate(401.013 67)" fill="#fff" opacity="0.29" />
      <path d="M287,10.984H0l2-11H285Z" transform="translate(116 189.016)" fill="#fff" opacity="0.04" />
    </g>
  </g>
);

const Lamp = ({ hover }: { hover: boolean }): JSX.Element => (
  <g clipPath="url(#HomeButton_clip)" className={`${styles.lamp} ${hover ? styles.active : styles.inactive}`}>
    <g id="HomeButton_Reflect" clipPath="url(#HomeButton_clip)">
      <g transform="translate(-116 -67)">
        <rect width="283" height="122" transform="translate(118 78)" fill="#ff8324" opacity="0.02" />
        <path d="M0,0,2,11V133H0Z" transform="translate(116 67)" fill="#ff8324" opacity="0.04" />
        <path d="M0,0H287l-2,11H2Z" transform="translate(116 67)" fill="#ff8324" opacity="0.1" />
        <path d="M1.987,0l-2,11V133h2Z" transform="translate(401.013 67)" fill="#ff8324" opacity="0.04" />
        <path d="M287,10.984H0l2-11H285Z" transform="translate(116 189.016)" fill="#ff8324" opacity="0.1" />
      </g>
    </g>
    <g id="HomeButton_Light" clipPath="url(#HomeButton_Light_clip)">
      <circle
        cx={2 + (283 - 2) / 2}
        cy={11 + (133 - 11) / 2}
        r="44"
        opacity={0.46}
        className={styles.light}
        fill="#ff8324"
      />
    </g>
  </g>
);

const Text = (): JSX.Element => (
  <g clipPath="url(#HomeButton_clip)" className={styles.text}>
    <text
      x={2 + (283 - 2) / 2}
      y={11 + (133 - 11) / 2}
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.real}
    >
      HOME
    </text>
    <text x={(283 - 2) / 2} y={(133 - 11) / 2} textAnchor="middle" dominantBaseline="central" className={styles.shadow}>
      HOME
    </text>
  </g>
);

const HomeButton = (): JSX.Element => {
  const [hover, setHover] = useState(false);

  function onMouseOver() {
    setHover(true);
  }

  function onMouseOut() {
    setHover(false);
  }

  return (
    <MenuButton href="/" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <svg
        className={styles.image}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 287 133"
      >
        <defs>
          <clipPath id="HomeButton_clip">
            <rect width="287" height="133" />
          </clipPath>
          <clipPath id="HomeButton_Light_clip">
            <rect x="2" y="11" width="283" height="122" />
          </clipPath>
        </defs>

        <Material />
        <Lamp hover={hover} />
        <Text />
      </svg>
    </MenuButton>
  );
};

export default HomeButton;
