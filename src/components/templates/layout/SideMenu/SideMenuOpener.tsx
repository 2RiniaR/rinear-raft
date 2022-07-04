import { ReactNode, TransitionEventHandler, useEffect, useState } from "react";
import styles from "./SideMenuOpener.module.scss";
import { assignClasses } from "lib/helper";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: ReactNode;
};

const SideMenuOpener = ({ open, setOpen, children }: Props): JSX.Element => {
  const [display, setDisplay] = useState(false);

  const onCloseTransitionEnd: TransitionEventHandler<HTMLDivElement> = () => {
    if (open) return;
    setDisplay(false);
  };

  useEffect(() => {
    if (!open) return;
    setDisplay(true);
  }, [open]);

  return (
    <div
      className={assignClasses(styles.container, open ? styles.opened : "")}
      style={{ left: display ? "0" : "-100vw" }}
      onTransitionEnd={onCloseTransitionEnd}
    >
      <button className={styles.outside} onClick={() => setOpen(false)} name="戻る" aria-label="戻る" />
      <div className={styles.menu}>{children}</div>
    </div>
  );
};

export default SideMenuOpener;
