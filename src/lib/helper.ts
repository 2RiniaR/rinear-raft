import dayjs from "dayjs";
import styles from "src/components/parts/Logo/index.module.scss";

export type Constructor<T> = { new (...args: never[]): T } | ((...args: never[]) => T);

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

export function convertRemToPx(rem: number): number {
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  return rem * parseFloat(fontSize);
}
