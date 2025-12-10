import { NavLink } from "react-router-dom";
import { Collapse, Offcanvas } from "bootstrap";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";


const Navbar = (prop) => {
  const { theme, themeToggle } = prop;
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <h1 className="navbar-brand">
            <NavLink
              className="text-body"
              style={{ textDecoration: "none" }}
              to={"/"}
            >
              MovieApp
            </NavLink>
          </h1>

          <button
            className="navbar-toggler"
            data-bs-target="#offcanvasNavbar"
            data-bs-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h3 className="offcanvas-title ">MovieApp</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <button className="btn btn-toggle" onClick={themeToggle}>
                    {theme == "light" ? <BsMoonFill /> : <BsFillSunFill />}
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/about"}>
                    about
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/contact"}>
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
