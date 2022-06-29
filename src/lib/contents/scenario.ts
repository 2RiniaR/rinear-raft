/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import { Content, ContentGenre, ContentHead } from ".";

export type GenreType = "scenarios";
export const genre: ContentGenre & GenreType = "scenarios";
export type GenreStrict = { genre: GenreType };
export type Params = {
  thumbnails: StaticImageData[];
  releasedAt: dayjs.Dayjs | undefined;
};

export type ScenarioContentHead = ContentHead & GenreStrict & Params;
export type ScenarioContent = Content & GenreStrict & Params;
