import css from "./Navigation.module.css";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components";
import clsx from "clsx";

interface NavigationProps {
  switchTheme: () => void;
}

const Div = styled.div`
  background-color: ${(props) => props.theme.navBodyColor};
  color: ${(props) => props.theme.navTextColor};
  } `;

const Navigation: React.FC<NavigationProps> = ({ switchTheme }) => {
  const getNavLink = (isActive: boolean) =>
    clsx(css.link, { [css.active]: isActive });

  return (
    <>
      <Container>
        <header className={css.header}>
          <Div className={css.div}>
            <nav>
              <ul className={css.list}>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => getNavLink(isActive)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/movies"
                    className={({ isActive }) => getNavLink(isActive)}
                  >
                    Movie
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/show"
                    className={({ isActive }) => getNavLink(isActive)}
                  >
                    TV Show
                  </NavLink>
                </li>
                <li>
                  <button className={css.themeBtn} onClick={switchTheme}>
                    <MdOutlineDarkMode size={28} />
                  </button>
                </li>
              </ul>
            </nav>
          </Div>
        </header>
      </Container>
    </>
  );
};

export default Navigation;
