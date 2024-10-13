import css from "./Navigation.module.css";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { ThemeProvider } from "styled-components";

const Navigation = () => {
  return (
    <>
      <Container>
        <header className={css.header}>
          <div className={css.box}>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/movies">Movie</NavLink>
                </li>
                <li>
                  <NavLink to="/show">TV Show</NavLink>
                </li>
                {/* <button onClick={switchTheme}>
                  <MdOutlineDarkMode size={24} />
                </button> */}
                <li>
                  <button></button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Container>
    </>
  );
};

export default Navigation;
