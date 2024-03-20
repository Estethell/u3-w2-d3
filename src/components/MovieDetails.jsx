import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const MovieDectails = () => {
  const [movieObj, setMovieObj] = useState([]);

  const params = useParams();

  const fetchMovies = () => {
    debugger;
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e8901073&s=";
    fetch(url + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore in console");
        }
      })
      .then((apiItems) => {
        // this.setState({ arrayOfMovies: ApiItems.Search.slice(0, 6), loader: false });
        const rightMovieToShow = apiItems.find((b) => b.imdbID === parseInt(params.movieId));
        debugger;
        if (rightMovieToShow) {
          setMovieObj(rightMovieToShow);
        }
      })
      .catch((error) => {
        console.log("errore", error);
      });
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  return (
    <div>
      <h2>Vediamo nel dettaglio:</h2>
      <Card>
        <Card.Img src={movieObj.Poster} alt="Locandina" />
        <Card.Body>
          <Card.Title>{movieObj.Title}</Card.Title>
          <Card.Text>{movieObj.Plot}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDectails;
