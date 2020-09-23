export default {
  fonts: {
    main: "lato, sans-serif",
    code: "Roboto Mono, monospace",
  },
  colors: {
    primaryMain: "#01589b",
    primaryLight: "#4f84cc",
    primaryDark: "#00306c",
    secondaryMain: "#9b4401",
    secondaryLight: "#d27132",
    secondarDark: "#681700",
    onPrimary: "#ffffff",
    onSecondary: "#ffffff",
    error: "#b00020",
    background: "#ffffff",
    onBackground: "#000000",
    backgroundPaper: "#f5f5f5",
    backgroundGrey: "#e1e1e1",
  },
  /* 
  We'll create a breakpoint for tablets (around 600 px - portrait scale)
  Then another breakpoint for desktops from 56 rem (around 900 px). By setting the threshold
  relatively low, we'll want to make sure that all tablets landscape view will get the same layout as the desktop. 
  */

  breakpoints: {
    tablet: "only screen and (min-width: 38rem)",
    desktop: "only screen and (min-width: 56rem)",
  },
  // I have simplified the spacing options
  spacings: {
    extraSmall: "0.10rem",
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
    extraLarge: "2rem",
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
  },
  radius: {
    soft: "0.5rem",
    sharp: "1rem",
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
};
