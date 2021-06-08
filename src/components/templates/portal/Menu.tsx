import Link from "next/link";
import React from "react";
import styles from "./Menu.module.scss";
import Title from "src/components/parts/portal/Title";

type MenuItemProps = {
  href: string;
  text: string;
};

const TalksButton = ({ href, text }: MenuItemProps): JSX.Element => (
  <div className={styles.item}>
    <Link href={href}>
      <a>
        <div className={styles.button}>
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
                <rect width="283" height="122" transform="translate(116 78)" fill="#fff" opacity="0.03" />
                <path d="M0,0,4,11V122L0,133Z" transform="translate(116 67)" fill="#fff" opacity="0.07" />
                <path d="M0,0H287l-4,11H0Z" transform="translate(116 67)" fill="#fff" opacity="0.19" />
                <path d="M3.987,0l-4,11V133h4Z" transform="translate(399.013 67)" fill="#fff" opacity="0.29" />
                <path d="M287,10.984H0l4-11H283Z" transform="translate(116 189.016)" fill="#fff" opacity="0.04" />
              </g>
            </g>
            <text x="50%" y="54%" textAnchor="middle" dominantBaseline="central" className={styles.text}>
              {text}
            </text>
          </svg>
        </div>
      </a>
    </Link>
  </div>
);

const HomeButton = ({ href, text }: MenuItemProps): JSX.Element => (
  <div className={styles.item}>
    <Link href={href}>
      <a>
        <div className={styles.button}>
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
                <rect width="283" height="122" transform="translate(118 78)" fill="#fff" opacity="0.03" />
                <path d="M0,0,2,11V133H0Z" transform="translate(116 67)" fill="#fff" opacity="0.29" />
                <path d="M0,0H287l-2,11H2Z" transform="translate(116 67)" fill="#fff" opacity="0.19" />
                <path d="M1.987,0l-2,11V133h2Z" transform="translate(401.013 67)" fill="#fff" opacity="0.29" />
                <path d="M287,10.984H0l2-11H285Z" transform="translate(116 189.016)" fill="#fff" opacity="0.04" />
              </g>
            </g>
            <text x="50%" y="54%" textAnchor="middle" dominantBaseline="central" className={styles.text}>
              {text}
            </text>
          </svg>
        </div>
      </a>
    </Link>
  </div>
);

const ProjectButton = ({ href, text }: MenuItemProps): JSX.Element => (
  <div className={styles.item}>
    <Link href={href}>
      <a>
        <div className={styles.button}>
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
              <rect width="283" height="122" transform="translate(4 11)" fill="#fff" opacity="0.03" />
              <path d="M4,0,0,11V122l4,11Z" transform="translate(283)" fill="#fff" opacity="0.07" />
              <path d="M287,0H0L4,11H287Z" fill="#fff" opacity="0.19" />
              <path d="M-.013,0l4,11V133h-4Z" transform="translate(0.013)" fill="#fff" opacity="0.29" />
              <path d="M0,10.984H287l-4-11H4Z" transform="translate(0 122.016)" fill="#fff" opacity="0.04" />
            </g>
            <text x="50%" y="54%" textAnchor="middle" dominantBaseline="central" className={styles.text}>
              {text}
            </text>
          </svg>
        </div>
      </a>
    </Link>
  </div>
);

const Menu = (): JSX.Element => (
  <div className={styles.menu}>
    <div className={styles.title}>
      <Title text="Menu" />
    </div>
    <div className={styles.content}>
      <TalksButton href="/posts" text="TALKS" />
      <HomeButton href="/" text="HOME" />
      <ProjectButton href="/works" text="PROJECTS" />
    </div>
  </div>
);

export default Menu;
