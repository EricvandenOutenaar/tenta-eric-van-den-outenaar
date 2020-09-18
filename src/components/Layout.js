import React from "react";
import { LayoutWrapper } from "../elements";
import { Header, Content, Footer } from "../components";

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
