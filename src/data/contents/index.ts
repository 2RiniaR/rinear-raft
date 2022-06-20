/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import { ContentHead } from "lib/contents";

export function getRoute(content: ContentHead): string {
  return `/${content.genre}/${content.id}`;
}
