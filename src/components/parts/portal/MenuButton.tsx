import Link from "next/link";
import React from "react";
import styles from "./MenuButton.module.scss";

export type MenuButtonProps = {
  href: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  onClick?: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ href, onMouseOver, onMouseOut, onClick, children }): JSX.Element => (
  <div className={styles.item}>
    <Link href={href}>
      <a>
        <div className={styles.button} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
          {children}
        </div>
      </a>
    </Link>
  </div>
);

export default MenuButton;
