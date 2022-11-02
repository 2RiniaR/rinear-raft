import React, { useCallback, useRef } from "react";
import Image from "next/image";
import upIconPic from "public/general/up-icon.png";

const TopButton = () => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    topRef?.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [topRef]);

  return (
    <>
      <div ref={topRef} />
      <button onClick={scrollToTop} name="トップへ" aria-label="トップへ">
        <Image src={upIconPic} alt="トップへ" layout="responsive" />
      </button>
    </>
  );
};

export default TopButton;
