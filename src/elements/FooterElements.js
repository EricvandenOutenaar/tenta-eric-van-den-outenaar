import styled from "styled-components";

/*
  I have given the footer some margin on top and bottom,
  to push it away from MainContentContainer and create bottom space.
  I have also aligned and 'justified' the items differently depending on the view. 
*/
export const FooterWrapper = styled.footer`
  grid-column: 1 / 7;
  grid-row: 23;
  height: 5rem;
  padding: 0 ${({ theme }) => theme.spacings.medium};
  background-color: ${({ theme }) => theme.colors.primaryMain};
  margin: ${({ theme }) => theme.spacings.extraLarge} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 13;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterSocialIcons = styled.div`
  margin: ${({ theme }) => theme.spacings.medium};
  img {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }
  img:hover,
  img:focus {
    filter: brightness(50%);
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin: 0;
  }
`;
