import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// maybe make this a bit more my own
export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.5rem 0.75rem;
  margin-top: ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.secondaryMain};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.onSecondary};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`;
