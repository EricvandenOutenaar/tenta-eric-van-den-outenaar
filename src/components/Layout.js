import React from "react";
import { LayoutWrapper } from "../elements";
import { Header, Footer } from "../components";

export const Layout = ({ children, hideTitle, smallHeader }) => {
  return (
    <LayoutWrapper>
      <Header hideTitle={hideTitle} smallHeader={smallHeader}/>
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
