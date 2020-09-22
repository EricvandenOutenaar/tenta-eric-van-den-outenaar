import styled from "styled-components";

// I have given the footer some margin on top and bottom, to push it away from MainContentContainer and create bottom space
export const FooterWrapper = styled.footer`
  grid-column: 1 / 7;
  grid-row: 23 / span 3;
  margin: ${({ theme }) => theme.spacings.extraLarge} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 13;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSocialIcons = styled.div`
  margin-bottom: 2rem;
  img {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`;
