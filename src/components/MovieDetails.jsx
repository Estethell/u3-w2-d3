import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const MovieDectails = () => {
  const [movieObj, setMovieObj] = useState([]);

  const params = useParams();
  console.log(params);

  const fetchMovies = () => {
    const url = "http://www.omdbapi.com/?apikey=e8901073&i=";
    fetch(url + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore in console");
        }
      })
      .then((apiItems) => {
        setMovieObj(apiItems);
      })
      .catch((error) => {
        console.log("errore", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, [params.movieId]);

  return (
    <div>
      <h2>Vediamo nel dettaglio:</h2>

      <Card>
        <Card.Img src={movieObj.Poster} alt="Locandina" style={{ width: "200px" }} />
        <Card.Body>
          <Card.Title>{movieObj.Title}</Card.Title>
          <Card.Text>{movieObj.Plot}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDectails;
