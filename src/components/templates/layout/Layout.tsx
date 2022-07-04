import React, { useCallback, useRef, useState } from "react";
import { SideMenu, SideMenuButton } from "./SideMenu";
import { TopButton } from "./TopButton";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props): JSX.Element => {
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
      <SideMenuButton onClick={() => setSideMenuOpened(true)} />
      <TopButton onClick={() => scrollToTop()} />
      <SideMenu open={sideMenuOpened} setOpen={setSideMenuOpened} />
    </>
  );
};
