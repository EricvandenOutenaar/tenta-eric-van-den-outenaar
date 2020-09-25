import React from "react";
import { BlogPreviewContainerWrapper } from "../elements";

/*
 This is the flex container that holds all the blog previews.
 The container is the second block item in the MainContentContainer.
*/ 
export const BlogPreviewContainer = ({ children }) => {
  return (
    <BlogPreviewContainerWrapper>{children}</BlogPreviewContainerWrapper>
  );
};
