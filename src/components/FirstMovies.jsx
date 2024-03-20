import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const FirstMovies = () => {
  // state = {
  //   arrayOfMovies: [],
  //   loader: true,
  // };

  const [arrayOfMovies, setArrayOfMovies] = useState([]);
  const [loader, setLoader] = useState("true");

  const fetchMovies = () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e8901073&s=Caribbean";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore in console");
        }
      })
      .then((ApiItems) => {
        setArrayOfMovies(ApiItems.Search.slice(0, 6));
        setLoader("false");
      })
      .catch((error) => {
        console.log("errore", error);
        setLoader("false");
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h4 className="m-5">Pirati dei caraibi</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {loader === true && (
          <div>
            <Spinner animation="border" variant="info" />
          </div>
        )}

        {arrayOfMovies.map((b) => {
          debugger;
          return (
            <div className="col mb-2 text-center px-1" key={b.imdbID}>
              <div>
                <Link to={"/MovieDetails/" + b.imdbID}>
                  <img
                    className="imgMovie1 img-fluid"
                    src={b.Poster}
                    alt="movie"
                    style={{ width: "300px", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstMovies;
