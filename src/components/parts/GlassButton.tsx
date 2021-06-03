import Link from "next/link";
import React from "react";
import styles from "./GlassButton.module.scss";

type GlassButtonProps = {
  href: string;
  text: string;
};

const GlassButton = ({ href, text }: GlassButtonProps): JSX.Element => (
  <>
    <Link href={href}>
      <a>
        <div className={styles.button}>
          <h3 className={styles.text}>{text}</h3>
        </div>
      </a>
    </Link>
  </>
);

export default GlassButton;
