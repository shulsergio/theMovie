import { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../src/Pages/HomePage"));
const MoviePage = lazy(() => import("../src/Pages/MoviePage"));
const ShowPage = lazy(() => import("../src/Pages/ShowPage"));
const NotFoundPage = lazy(() => import("../src/Pages/NotFoundPage"));
const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/show" element={<ShowPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
