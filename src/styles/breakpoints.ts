export const breakpoints = {
  xxs: 240,
  xs: 475,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1400,
  xxl: 1600,
};
  
export const DeviceUp = {
  xxs: `(min-width: ${breakpoints.xxs}px)`,
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
};

export const DeviceDown = {
  xxs: `(max-width: ${breakpoints.xxs - 1}px)`,
  xs: `(max-width: ${breakpoints.xs - 1}px)`,
  sm: `(max-width: ${breakpoints.sm - 1}px)`,
  md: `(max-width: ${breakpoints.md - 1}px)`,
  lg: `(max-width: ${breakpoints.lg - 1}px)`,
  xl: `(max-width: ${breakpoints.xl - 1}px)`,
  xxl: `(max-width: ${breakpoints.xxl - 1}px)`,
};
