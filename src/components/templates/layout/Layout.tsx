import React, { useCallback, useRef, useState } from "react";
import styles from "./Layout.module.scss";
import { SideMenu, SideMenuButton } from "./SideMenu";
import TopButton from "components/templates/layout/TopButton";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    topRef?.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [topRef]);

  return (
    <>
      <div ref={topRef} />

      {children}

      <div className={styles.sideMenuButton}>
        <SideMenuButton onClick={() => setSideMenuOpened(true)} />
      </div>

      <div className={styles.topButton}>
        <TopButton onClick={() => scrollToTop()} />
      </div>

      <div className={styles.sideMenu}>
        <SideMenu open={sideMenuOpened} setOpen={setSideMenuOpened} />
      </div>
    </>
  );
};

export default Layout;
