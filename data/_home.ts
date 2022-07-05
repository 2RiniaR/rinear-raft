import { about } from "./about";
import { story } from "./story";
import { HomeSettings } from "types";

const settings: HomeSettings = {
  pickups: { type: "latest", count: 3 },
  about,
  story
};

export default settings;
