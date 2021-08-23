import React from "react";
import styles from "./index.module.scss";
import { getComponentTemplate } from "src/lib/component";
import { ProjectContentHead } from "src/lib/contents";

export type ViewerParams = {
  heads: ProjectContentHead[];
};

const Viewer = getComponentTemplate(({ heads }: ViewerParams) => <div />);

export default Viewer;
