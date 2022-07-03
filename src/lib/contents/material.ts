/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import { Content, ContentGenre, ContentHead } from ".";

export type GenreType = "materials";
export const genre: ContentGenre & GenreType = "materials";
export type GenreStrict = { genre: GenreType };
export type Params = {
  thumbnails: StaticImageData[];
  releasedAt: dayjs.Dayjs | undefined;
};

export type MaterialContentHead = ContentHead & GenreStrict & Params;
export type MaterialContent = Content & GenreStrict & Params;
