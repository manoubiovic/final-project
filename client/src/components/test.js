import React from 'react'

function test() {
  return (
    <nav className="navbar navbar-nav  navbar-expand-lg navbar-light bg-light  fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div id="personal_nav_responsive">
          <a className="navbar-brand" href="#">
            <img
              src="ford.png"
              width="200"
              height="60"
              className="d-inline-block align-top"
              alt="FORD"
              
            />
          </a>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-light"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  {/* <link to="/Logo"><li>Logo</li></link> */}

                  <Link to="/" className="nav-link">
                    {" "}
                    <i> Home</i>{" "}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/produit">
                    <i>Produits</i>
                  </Link>
                </li>{" "}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                   <i> Services</i>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="ServiceReparation">
                    <i> Réparation</i>
                    </Link>
                    <Link className="dropdown-item" to="ServiceInstallation">
                    <i> Installation</i>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link className="nav-link" to="Contact">
                    <i>Contact</i>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="Login">
                    <i>Login</i>
                  </Link>
                </li>{" "}
                <li>
                  <Link className="nav-link" to="Search">
                    <i>Search</i>
                  </Link>
                </li>
              {  <li>
                  <Link className="nav-link" to="dashbord">
                    <i>dashbord</i>
                  </Link>
                </li>}
                <li>
                  <Link className="nav-link" to="Search">
                    <i>{user.name}</i>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="Search">
                    <i><button>logout</button></i>
                  </Link>
                </li>
                {/* <li>
              <Link className="nav-link" to="Register">
                <i>register</i>
              </Link>
            </li> */}
                {/* <Link to ="Search"><li><i>Search</i> <Input
        type="text"
        placeholder="enter the title you search..."
        onChange={handle}
      /></li></Link> */}
              </ul>{" "}
            </div>
          </div>

        </div>
      </div>
    </div>
   
  </nav>
  )
}

export default test