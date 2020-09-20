import styled from "styled-components";

// to be defined further later
export const FooterWrapper = styled.footer`
  grid-column: 1 / 7;
  grid-row: 19;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-column: 1 / 11;
    grid-row: 23;
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
`
