import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <Row>
      <Col className="p-0">
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#home">
                <img src={logo} alt="logo" style={{ width: "100px", height: "55px" }} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <a className="nav-link active fw-bold" href="#home">
                      Home
                    </a> */}
                    <Link to="/">
                      <div className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home</div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link fw-bold" href="#home">
                      TV Shows
                    </a> */}
                    <Link to="/TvShows">
                      <div className={location.pathname === "/TvShows" ? "nav-link active" : "nav-link"}>Tv Shows</div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#home">
                      Movies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#home">
                      Recently Added
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#home">
                      My List
                    </a>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <i className="bi bi-search icons"></i>
                  <div id="kids" className="fw-bold">
                    KIDS
                  </div>
                  <i className="bi bi-bell icons"></i>
                  <i className="bi bi-person-circle icons"></i>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Col>
    </Row>
  );
}

export default NavBar;
