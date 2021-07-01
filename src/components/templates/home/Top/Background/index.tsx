import Image from "next/image";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import Parallax from "src/components/accessories/Parallax";

const InnerParallax = () => <Image src="/top.jpg" layout="fill" objectFit="cover" priority={true} />;

const Background = getComponentTemplate(() => <Parallax speed={-0.1} className={styles.image} Inner={InnerParallax} />);

export default Background;
