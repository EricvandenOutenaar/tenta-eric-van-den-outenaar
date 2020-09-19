import React from "react";
import { LayoutWrapper } from "../elements";
import { Header, Footer } from "../components";

export const Layout = ({ children, hideTitle, halveSize }) => {
  return (
    <LayoutWrapper>
      <Header hideTitle={hideTitle} halveSize={halveSize}/>
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
