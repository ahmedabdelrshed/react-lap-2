import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light px-3 rounded-2">
      <Link className="navbar-brand text-primary fw-bold " to={"/"}>
        ShopNow
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/help"}>
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
