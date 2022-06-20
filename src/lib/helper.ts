/*
 * Copyright (c) 2022 RineaR. All rights reserved.
 */

import dayjs, { OpUnitType, QUnitType } from "dayjs";

export function formatExceededTime(from: dayjs.Dayjs, to: dayjs.Dayjs): string {
  if (from.diff(to) < 0) return "---";
  const expressions: { unit: QUnitType | OpUnitType; display: (x: number) => string }[] = [
    { unit: "year", display: (x) => `${x}年前` },
    { unit: "month", display: (x) => `${x}か月前` },
    { unit: "week", display: (x) => `${x}週間前` },
    { unit: "day", display: (x) => `${x}日前` },
    { unit: "hour", display: (x) => `${x}時間前` },
    { unit: "minute", display: (x) => `${x}分前` }
  ];
  for (let i = 0; i < expressions.length; i++) {
    const delta = from.diff(to, expressions[i].unit);
    if (delta > 0) return expressions[i].display(delta);
  }
  const finalExpression = expressions[expressions.length - 1];
  return finalExpression.display(0);
}

export function formatDisplayDate(date: dayjs.Dayjs | undefined): string {
  if (date === undefined) return "----.--.--";
  return date.format("YYYY.M.D");
}

export function getScrollPosition(): number {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

export function assignClasses(...values: string[]): string {
  return values.join(" ");
}

export function arrayToDict<T, U>(array: T[], key: (obj: T) => string, value: (obj: T) => U): { [key: string]: U } {
  return array.reduce<{ [key: string]: U }>((prev, curr) => {
    prev[key(curr)] = value(curr);
    return prev;
  }, {});
}
