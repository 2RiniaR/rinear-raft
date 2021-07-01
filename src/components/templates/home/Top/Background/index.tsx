import Image from "next/image";
import { getComponentTemplate } from "src/lib/component";
import styles from "src/components/templates/home/Top/index.module.scss";
import FixedParallax from "src/components/accessories/FixedParallax";

const Background = getComponentTemplate(() => (
  <FixedParallax
    className={styles.container}
    startScrollPos={0}
    endScrollPos={750}
    startWindowPos={0}
    endWindowPos={-400}
  >
    <Image src="/top.jpg" layout="fill" objectFit="cover" priority={true} />
  </FixedParallax>
));

export default Background;
