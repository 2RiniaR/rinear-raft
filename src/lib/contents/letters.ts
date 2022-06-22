/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { Content, ContentGenre, ContentHead } from ".";

export type GenreType = "letters";
export const genre: ContentGenre & GenreType = "letters";
export type GenreStrict = { genre: GenreType };
export type Params = {
  index: number;
};

export type LetterContentHead = ContentHead & GenreStrict & Params;
export type LetterContent = Content & GenreStrict & Params;
