import { lazy, Suspense, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from "./components/Service/themes";

const HomePage = lazy(() => import("../src/Pages/HomePage"));
const MoviePage = lazy(() => import("../src/Pages/MoviePage"));
const ShowPage = lazy(() => import("../src/Pages/ShowPage"));
const NotFoundPage = lazy(() => import("../src/Pages/NotFoundPage"));

const App = () => {
  const [theme, setTheme] = useState<string>("light");
  const switchTheme = (): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Navigation switchTheme={switchTheme} />
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/show" element={<ShowPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
