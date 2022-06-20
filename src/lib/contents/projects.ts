/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import { Content, ContentGenre, ContentHead } from ".";

export type GenreType = "projects";
export const genre: ContentGenre & GenreType = "projects";
export type GenreStrict = { genre: GenreType };
export type Params = {
  thumbnails: StaticImageData[];
  releasedAt: dayjs.Dayjs | undefined;
};

export type ProjectContentHead = ContentHead & GenreStrict & Params;
export type ProjectContent = Content & GenreStrict & Params;
