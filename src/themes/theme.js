export default {
  fonts: {
    main: "lato, sans-serif",
    code: "Roboto Mono, monospace",
  },
  // The colors scheme I have develop with the color picker tool on the material.io website
  colors: {
    primaryMain: "#01589b",
    primaryLight: "#4f84cc",
    primaryDark: "#00306c",
    secondaryMain: "#9b4401",
    secondaryLight: "#d27132",
    secondaryDark: "#681700",
    onPrimary: "#ffffff",
    onSecondary: "#ffffff",
    error: "#b00020",
    background: "#ffffff",
    onBackground: "#000000",
    backgroundPaper: "#f5f5f5",
    backgroundGrey: "#e1e1e1",
  },
  /* 
  I create a breakpoint for tablets (around 600 px - portrait scale)
  Then another breakpoint for desktops from 56 rem (around 900 px). 
  By setting the threshold relatively low, 
  I try to make sure that tablets in landscape view will get 
  the same layout as desktops. 
  */
  breakpoints: {
    tablet: "only screen and (min-width: 38rem)",
    desktop: "only screen and (min-width: 56rem)",
  },
  // I have created several spacing options
  spacings: {
    extraSmall: "0.10rem",
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
    extraLarge: "2rem",
  },
  // Taken from the class project
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  // Same here...
  shadows: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
  },
  // This is use for the buttons for instance
  radius: {
    soft: "0.5rem",
    sharp: "1rem",
  },
  // I make use of this in the styled Typography component
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  /*
   For each fontsize I define a normal and large variant. 
   In the styled Typography component I reference these key value pairs (syntax: [][])
   Large is normal with a factor 1.5 in all cases except the h1 (factor 1.7) 
   */
  fontSize: {
    h1: {
      normal: "2.5rem",
      large: "4.25rem",
    },
    h2: {
      normal: "2rem",
      large: "3rem",
    },
    h3: {
      normal: "1.75rem",
      large: "2.6rem",
    },
    h4: {
      normal: "1.5rem",
      large: "2.25.6rem",
    },
    h5: {
      normal: "1.25rem",
      large: "1.9rem",
    },
    h6: {
      normal: "1rem",
      large: "1.5rem",
    },
    p: {
      normal: "1rem",
      large: "1.5rem",
    },
  },
};
