export const breakpoints = {
  xs: "575px",
  sm: "576px",
  md: "768px",
  lg: "992px",
};

const mediaQuery = {
  mobilXs: `(max-width: ${breakpoints.xs})`,
  tabletSm: `(min-width: ${breakpoints.sm})`,
  tabletMd: `(min-width: ${breakpoints.md})`,
  laptopLg: `(min-width: ${breakpoints.lg})`,
};

export default mediaQuery;
