import React, { useState } from "react";
import styles from "./MenuButton.module.scss";
import MenuButton from "./MenuButton";

const Material = (): JSX.Element => (
  <g id="ProjectButton" clipPath="url(#ProjectButton_clip)">
    <rect width="283" height="122" transform="translate(4 11)" fill="#fff" opacity="0.03" />
    <path d="M4,0,0,11V122l4,11Z" transform="translate(283)" fill="#fff" opacity="0.07" />
    <path d="M287,0H0L4,11H287Z" fill="#fff" opacity="0.19" />
    <path d="M-.013,0l4,11V133h-4Z" transform="translate(0.013)" fill="#fff" opacity="0.29" />
    <path d="M0,10.984H287l-4-11H4Z" transform="translate(0 122.016)" fill="#fff" opacity="0.04" />
  </g>
);

const Lamp = ({ hover }: { hover: boolean }): JSX.Element => (
  <g clipPath="url(#ProjectButton_clip)" className={`${styles.lamp} ${hover ? styles.active : styles.inactive}`}>
    <g id="ProjectButton_Reflect" clipPath="url(#ProjectButton_clip)">
      <rect width="283" height="122" transform="translate(4 11)" fill="#ff8324" opacity="0.02" />
      <path d="M4,0,0,11V122l4,11Z" transform="translate(283)" fill="#ff8324" opacity="0.04" />
      <path d="M287,0H0L4,11H287Z" fill="#ff8324" opacity="0.1" />
      <path d="M-.013,0l4,11V133h-4Z" transform="translate(0.013)" fill="#ff8324" opacity="0.04" />
      <path d="M0,10.984H287l-4-11H4Z" transform="translate(0 122.016)" fill="#ff8324" opacity="0.1" />
    </g>
    <g id="ProjectButton_Light" clipPath="url(#ProjectButton_Light_clip)">
      <circle
        cx={4 + (283 - 4) / 2}
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
  <g clipPath="url(#ProjectButton_clip)" className={styles.text}>
    <text
      x={4 + (283 - 4) / 2}
      y={11 + (133 - 11) / 2}
      textAnchor="middle"
      dominantBaseline="central"
      className={styles.real}
    >
      PROJECTS
    </text>
    <text x={(283 - 4) / 2} y={(133 - 11) / 2} textAnchor="middle" dominantBaseline="central" className={styles.shadow}>
      PROJECTS
    </text>
  </g>
);

const ProjectsButton = (): JSX.Element => {
  const [hover, setHover] = useState(false);

  function onMouseOver() {
    setHover(true);
  }

  function onMouseOut() {
    setHover(false);
  }

  return (
    <MenuButton href="/projects" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <svg
        className={styles.image}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 287 133"
      >
        <defs>
          <clipPath id="ProjectButton_clip">
            <rect width="287" height="133" />
          </clipPath>
          <clipPath id="ProjectButton_Light_clip">
            <rect x="4" y="11" width="283" height="122" />
          </clipPath>
        </defs>

        <Material />
        <Lamp hover={hover} />
        <Text />
      </svg>
    </MenuButton>
  );
};

export default ProjectsButton;
