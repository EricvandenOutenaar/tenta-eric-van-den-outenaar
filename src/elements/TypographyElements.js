import React from "react";
import styled from "styled-components";

// I this component I have tried to create my own custom Typography component

/*
 This helper function, returns an element.
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
 Here I have defined my custom typography component. 
 Depending on the 'type' prop we will create a specific element. 
 I have created several props to play with some custom settings. 
 I take into account that the user of the Typography component 
 doesn't have to define the values. In addition, 
 I have also made sure to pass inline styles 
 through to the css of the html-element. 
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
