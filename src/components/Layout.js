import React from "react";
import { LayoutWrapper } from "../elements";
import { Header, Footer } from "../components";

// This component servers as the overall grid layout for the pages

export const Layout = ({ children, hideTitle, smallHeader }) => {
  return (
    <LayoutWrapper>
      <Header hideTitle={hideTitle} smallHeader={smallHeader} />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
