import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import "../style/navbar.css";

// import { Input} from "reactstrap";
// import handle from "react";

const NavBar = () => {
  const user = useSelector((store) => store.user?.user);
  console.log(user)
  const navigate = useNavigate();
  
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
                      <Link className="dropdown-item" to="CommandedePiece">
                      <i> commande de piece</i>
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
                 { user?.status=="admin"? <li>
                    <Link className="nav-link" to="dashbord">
                      <i>dashbord</i>
                    </Link>
                  </li>: null}
              
                  
            
                </ul>{" "}

             
              </div>
            </div>
          
          </div>
        </div>
        <span style={{display:"flex", marginLeft:"100px", width:"50px"}}>
                { user? <h3 style={{marginRight:"20px", marginTop:"18px"}}>{user?.name}</h3>:null}
                 {user?<button style={{width:"250px"}}
                  onClick={() => {
                    localStorage.removeItem("token");
                    
                    setTimeout(() => {
                      navigate("/login");
                    }, 1000);
                    window.location.reload()
                  }}
                
                >
                 logout
                </button>:null} 
                </span>
      </div>
     
    </nav>
  );
};

export default NavBar;
