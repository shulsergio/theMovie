import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  mainBodyColor: 'var(--color-light-main-body)',
  mainBodySecondaryColor: 'var(--color-light-second-body)',
  mainBodyColorText: 'var(--color-light-main-text)',
  navBodyColor: 'var(--color-light-nav-body)',
  navColorText: 'var(--color-light-nav-text)',
  textMainColor: 'var(--color-light-main-text)',
  textSecondColor: 'var(--color-light-second-text)',

  boxShadowCardNormal: 'var(--color-light-card-shadow-normal)',
  boxShadowCardHover: 'var(--color-light-card-shadow-hover)',

}

export const darkTheme ={
mainBodyColor: 'var(--color-dark-main-body)',
mainBodySecondaryColor: 'var(--color-dark-second-body)',
mainBodyColorText: "var(--color-dark-main-text)",
navBodyColor:'var(--color-dark-nav-body)',
navColorText: 'var(--color-dark-nav-text)',
textMainColor: 'var(--color-dark-main-text)',
textSecondColor: 'var(--color-dark-second-text)',
  boxShadowCardNormal: 'var(--color-dark-card-shadow-normal)',
  boxShadowCardHover: 'var(--color-dark-card-shadow-hover)',
};

export const GlobalStyles = createGlobalStyle`
  body {
  background: ${props => props.theme.mainBodyColor};
    color: ${props => props.theme.textMainColor};
    transition: all 0.3s ease;
  }
  h1, h2, h3, h4, h5, h6, p {
    color: ${props => props.theme.textMainColor};
  }
`;