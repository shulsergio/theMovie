import { Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Navigation from "./Pages/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <h1>Movie Data Base</h1>
      </Suspense>
    </>
  );
}

export default App;
