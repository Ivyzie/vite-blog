import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-30 mb-2 mb-lg-0" href="#">
            <img
              src="./penguin_color.png"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Penguin
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
