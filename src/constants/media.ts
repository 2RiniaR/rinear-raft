const breakPoint: { [device: string]: number } = {
  phone: 599,
  tablet: 600,
  desktop: 1025
};

export function getDeviceType(viewWidth: number): "phone" | "tablet" | "desktop" {
  if (viewWidth >= breakPoint.desktop) return "desktop";
  if (viewWidth >= breakPoint.tablet) return "tablet";
  return "phone";
}
