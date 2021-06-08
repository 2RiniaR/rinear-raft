import React, { useState } from "react";
import styles from "./MenuButton.module.scss";
import MenuButton from "./MenuButton";

const Material = (): JSX.Element => (
  <g id="TalksButton" clipPath="url(#TalksButton_clip)">
    <g transform="translate(-116 -67)">
      <rect width="283" height="122" transform="translate(116 78)" fill="#fff" opacity="0.03" />
      <path d="M0,0,4,11V122L0,133Z" transform="translate(116 67)" fill="#fff" opacity="0.07" />
      <path d="M0,0H287l-4,11H0Z" transform="translate(116 67)" fill="#fff" opacity="0.19" />
      <path d="M3.987,0l-4,11V133h4Z" transform="translate(399.013 67)" fill="#fff" opacity="0.29" />
      <path d="M287,10.984H0l4-11H283Z" transform="translate(116 189.016)" fill="#fff" opacity="0.04" />
    </g>
  </g>
);

const Lamp = ({ hover }: { hover: boolean }): JSX.Element => (
  <g clipPath="url(#TalksButton_clip)" className={`${styles.lamp} ${hover ? styles.active : styles.inactive}`}>
    <g id="TalksButton_Reflect" clipPath="url(#TalksButton_clip)">
      <g transform="translate(-116 -67)">
        <rect width="283" height="122" transform="translate(116 78)" fill="#ff8324" opacity="0.02" />
        <path d="M0,0,4,11V122L0,133Z" transform="translate(116 67)" fill="#ff8324" opacity="0.04" />
        <path d="M0,0H287l-4,11H0Z" transform="translate(116 67)" fill="#ff8324" opacity="0.1" />
        <path d="M3.987,0l-4,11V133h4Z" transform="translate(399.013 67)" fill="#ff8324" opacity="0.04" />
        <path d="M287,10.984H0l4-11H283Z" transform="translate(116 189.016)" fill="#ff8324" opacity="0.1" />
      </g>
    </g>
    <g id="TalksButton_Light" clipPath="url(#TalksButton_Light_clip)">
      <circle cx={283 / 2} cy={11 + (133 - 11) / 2} r="44" opacity={0.46} className={styles.light} fill="#ff8324" />
    </g>
  </g>
);

const Text = (): JSX.Element => (
  <g clipPath="url(#TalksButton_clip)" className={styles.text}>
    <text x={283 / 2} y={11 + (133 - 11) / 2} textAnchor="middle" dominantBaseline="central" className={styles.real}>
      TALKS
    </text>
    <text x={(283 + 4) / 2} y={(133 - 11) / 2} textAnchor="middle" dominantBaseline="central" className={styles.shadow}>
      TALKS
    </text>
  </g>
);

const TalksButton = (): JSX.Element => {
  const [hover, setHover] = useState(false);

  function onMouseOver() {
    setHover(true);
  }

  function onMouseOut() {
    setHover(false);
  }

  return (
    <MenuButton href="/talks" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <svg
        className={styles.image}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 287 133"
      >
        <defs>
          <clipPath id="TalksButton_clip">
            <rect width="287" height="133" />
          </clipPath>
          <clipPath id="TalksButton_Light_clip">
            <rect x="0" y="11" width="283" height="122" />
          </clipPath>
        </defs>

        <Material />
        <Lamp hover={hover} />
        <Text />
      </svg>
    </MenuButton>
  );
};

export default TalksButton;
