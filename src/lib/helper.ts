import dayjs, { OpUnitType, QUnitType } from "dayjs";

export type Constructor<T> = { new (...args: never[]): T } | ((...args: never[]) => T);

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

export function formatDisplayDate(date: dayjs.Dayjs): string {
  return date.format("YYYY.MM.DD");
}

export function getScrollPosition(): number {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

export function getElementPosition(element: HTMLElement): { x: number; y: number } {
  let x = 0,
    y = 0;
  for (
    let currentElement: HTMLElement | Element | null = element;
    currentElement instanceof HTMLElement;
    x += currentElement.offsetLeft, y += currentElement.offsetTop, currentElement = currentElement.offsetParent
  ) {
    /* do nothing */
  }
  return { x, y };
}

export function getDistance(...args: number[]): number {
  return Math.sqrt(args.map((x) => x * x).reduce((sum, x) => sum + x, 0));
}
