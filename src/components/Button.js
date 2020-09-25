import React from "react";
import { ButtonWrapper } from "../elements";

// The button component for the show more-buttons
export const Button = ({ children, href }) => {
  return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>;
};
