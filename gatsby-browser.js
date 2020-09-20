import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import "./language-tabs.css";


import { Table, Code } from "./src/components";

const components = {
  table: Table,
};

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body, html {
        font-family: ${({ theme }) => theme.fonts.main};
        height: 100%;
        background-color: ${({ theme }) => theme.colors.backgroundPaper};
    }
   
`;

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
);
