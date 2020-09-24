import React from "react";
import styled from "styled-components";

/*
 I created a helper function, which returns an element
 The default element of our typography component will be a p-element.  
 */
const getTypographyElement = ({ type, props }) => {
  switch (type) {
    case "p":
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
    default:
      return <p {...props} />;
  }
};

/* 
 Here I have defined a styled typography component mainly based on a provided prop called 'type'.
 I have created the option
 to easily set an italic fontstyle by passing in a boolean called italic. In addition, I have created
 the option to set the font weight to bold and to manipulate the fontsize. By giving the type and size
 props default values, we take into account that the user of our Typography component doesn't have to define certain values.
 In this case the default type is a p element and the default size is normal. If no props are provided our component 
 will reference ket value pair in the theme.js file associated with normal font size of the p element.   
 I also created logic for changing the color based on the background area. In addition, I have also built in the option to pass
 in any other inline styles through to the component. 
*/
export const Typography = styled(props =>
  getTypographyElement({ type: props.type, props })
)`
  font-size: ${({ theme, type = "p", size = "normal" }) =>
    theme.fontSize[type][size]};
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
        return colors.onPrimary;
      default:
        return colors.onBackgroundPaper;
    }
  }};
`;
