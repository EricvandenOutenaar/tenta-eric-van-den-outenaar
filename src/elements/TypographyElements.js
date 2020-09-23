import React from "react";
import styled from "styled-components";

/*
 I created a helper function, which returns an element
 The default element of our typography component will be a p-element.  
 */
const getTypographyElement = ({ type, props }) => {
  switch (type) {
    case "text":
      return <p {...props} />;
    case "h1":
      return <h1 {...props} />;
    case "h2":
      return <h2 {...props} />;
    case "h3":
      return <h3 {...props} />;
    case "h4":
      return <h4 {...props} />;
    case "h5":
      return <h5 {...props} />;
    case "h6":
      return <h6 {...props} />;
    case "subtitle":
      return <h2 {...props} />;
    default:
      return <p {...props} />;
  }
};

/* 
 Were we create the styled typography component based on the provided type prop
 I only want to give the H1 some margin for now and I have created the option
 to easily set an italic fontstyle by passing in a boolean called italic. 
 Also created logic for changing the color based on the background area. By passing props we make it possible to pass
 through the inline styles...     
*/
export const Typography = styled(props =>
  getTypographyElement({ type: props.type, props })
)`
  margin: ${({ theme: { spacings }, area = "-" }) =>
      area === "header" ? spacings.large : "0"}
    0 0
    ${({ theme: { spacings }, area = "-" }) =>
      area === "header" ? spacings.large : "0"};

  font-style: ${({ italic }) => italic && "italic"};
  font-weight: ${({ theme: { fontWeight }, bold }) =>
    bold ? fontWeight.bold : fontWeight.normal};

  color: ${({ theme: { colors }, area }) => {
    switch (area) {
      case "header":
        return colors.onPrimary;
      case "nav":
        return colors.onPrimary;
      case "featurePreview":
        return colors.onPrimary;
      case "blogPreview":
        return colors.onBackgroundPaper;
      case "blog":
        return colors.onBackgroundPaper;
      case "footer":
        return colors.onBackground;
      default:
        return colors.error;
    }
  }};
`;
