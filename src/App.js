import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import FirstMovies from "./components/FirstMovies";
import SecondMovies from "./components/SecondMovies";
import ThirdMovies from "./components/ThirdMovies";
import MovieDetails from "./components/MovieDetails";
import TvShows from "./components/TvShows";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Container fluid>
          <NavBar />
        </Container>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                <Title />
                <FirstMovies />
                <SecondMovies />
                <ThirdMovies />
              </div>
            }
          />
          <Route
            path="/TvShows"
            element={
              <div>
                <TvShows />
              </div>
            }
          />
          <Route
            path="/MovieDetails/:movieId"
            element={
              <div>
                <MovieDetails />
              </div>
            }
          />
        </Routes>
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
