import React  from "react";
import styles from "./index.module.scss";
import { ClassedParams, getComponentTemplate } from "src/lib/component";

export type IncrementalSeekerButtonParams = {
  onClick: () => void;
  active: boolean;
};
export type IncrementalSeekerButton = React.FC<ClassedParams<IncrementalSeekerButtonParams>>;

export type IncrementalSeekerParams = {
  seek: number;
  setSeek: (num: number) => void;
  PreviousButton: IncrementalSeekerButton;
  NextButton: IncrementalSeekerButton;
  seekStart: number;
  seekEnd: number;
  seekLength: number;
};

const IncrementalSeeker = getComponentTemplate<IncrementalSeekerParams>(
  ({ children, seek, setSeek, PreviousButton, NextButton, seekStart, seekEnd, seekLength }): JSX.Element => {
    const updateSeek = (num: number) => {
      const moveAt = Math.max(seekStart, Math.min(seekEnd - 1, num));
      setSeek(moveAt);
    };
    const onPrev = () => updateSeek(seek - 1);
    const onNext = () => updateSeek(seek + 1);

    return (
      <div className={styles.container}>
        {children}
        <PreviousButton onClick={onPrev} active={seekStart < seek} />
        <NextButton onClick={onNext} active={seek < seekEnd - seekLength} />
      </div>
    );
  }
);

export default IncrementalSeeker;
