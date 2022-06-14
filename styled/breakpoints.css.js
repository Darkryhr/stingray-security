const size = {
  //* smartphone - max 480px
  xs: '480px',
  //TODO: added in later, correct order later
  md: '768px',
  //* Tablets Ipads portrait mode max-width:1024px
  sm: '1024px',
  //* Desktops max-width:1280px
  lg: '1280px',
};

const device = {
  xs: `max-width: ${size.xs}`,
  sm: `max-width: ${size.sm}`,
  md: `max-width: ${size.md}`,
  lg: `max-width: ${size.lg}`,
  //* Huge size (Larger screen) max-width: 1281px and greater
  xl: `min-width: ${size.lg}`,
};

export const breakpoint = { size, device };
