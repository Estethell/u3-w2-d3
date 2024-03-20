import { Component } from "react";
import { Spinner } from "react-bootstrap";

class SecondMovies extends Component {
  state = {
    arrayOfMovies: [],
    loader: true,
  };

  fetchMovies = () => {
    const url = " http://www.omdbapi.com/?i=tt3896198&apikey=e8901073&s=Indiana_jones";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore in console");
        }
      })
      .then((ApiItems) => {
        this.setState({ arrayOfMovies: ApiItems.Search.slice(0, 6), loader: false });
      })
      .catch((error) => {
        console.log("errore", error);
        this.setState({ loader: false });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div>
        <h4 className="m-5">Indiana Jones</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.loader === true && (
            <div>
              <Spinner animation="border" variant="info" />
            </div>
          )}
          {this.state.arrayOfMovies.map((b) => {
            return (
              <div className="col mb-2 text-center px-1" key={b.imdbID}>
                <img
                  className="imgMovie1 img-fluid"
                  src={b.Poster}
                  alt="movie"
                  style={{ width: "300px", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SecondMovies;
