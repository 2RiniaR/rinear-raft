const mediaQueryBreakPoint: { [device: string]: number } = {
  phone: 599,
  tablet: 600,
  desktop: 1025
};

export function getMediaQueryDeviceType(viewWidth: number): "phone" | "tablet" | "desktop" {
  if (viewWidth >= mediaQueryBreakPoint.desktop) return "desktop";
  if (viewWidth >= mediaQueryBreakPoint.tablet) return "tablet";
  return "phone";
}
