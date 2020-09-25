import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Here I define the styling of the show more-buttons
export const ButtonWrapper = styled(props => <Link {...props} />)`
  display: block;
  margin: ${({ theme }) => theme.spacings.small} 0;
  padding: ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.secondaryMain};
  border-radius: ${({ theme }) => theme.radius.soft};
  color: ${({ theme }) => theme.colors.onSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`;
