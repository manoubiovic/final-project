import React, { useState } from "react";
import "../style/home.css";
// import Maps from "./Maps";
// import Produits from "./Produits";
import { produitslist } from "./Data";
const Home = () => {
  const [Produitslist, setData] = useState(produitslist);
  return (
    <div className="wrapper bloc_home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner bloc_car_home">
          <div className="carousel-item active ">
            <img className="d-block w-100" src="5.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="4.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="6.jpg" alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <ul className="banner">
        <div>
          <span className="banner-header">ford</span>
        </div>
        <span className="banner-text">
        est une plate-forme de commerce électronique composée d'un site web ainsi qu'une infrastructure de services logistiques (prestation de service) et de paiement à la livraison, pour la vente des pièces de rechange automobile en Tunisie.

Vidange.tn vous offre une large gamme de vidange automobile (filtres et huile moteur) multimarques avec identification par immatriculation Tunisienne. 
        </span>

        <ul>
          <button className="stylebtn">
            <a href="/contact">Contacter-nous Vite!!</a>
          </button>
        </ul>
      </ul>
      <br />
      <br />
      <div className="categorie_services">
      

        <div className="style_prevu_kit blocat3">
          <h1 className="cat_title">
            <a href="/Produits">Nos produit de Vente </a>
          </h1>
        </div>
        <div className="style_prevu_kit blocat2">
          <h1 className="cat_title">
            <a href="/ServiceInstallation">commande de piece </a>
          </h1>
        </div>
       
      </div>
      <section id="sec-contact" className="sec-contact pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <h1 className="h4">Besoin d'aide? Rejoigner Nous!</h1>

              <div className="contact-home" action="" method="">
                <div className="form-group">
                  {/* <label for="formName">Votre Nom:</label> */}
                  <input
                    id="formName"
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <fieldset className="form-group">
                  {/* <label for="formEmail1">Email:</label> */}
                  <input
                    id="formEmail1"
                    className="form-control"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </fieldset>

                <fieldset className="form-group">
                  {/* <label for="formMessage">Votre Message:</label> */}
                  <textarea
                    id="formMessage"
                    className="form-control"
                    rows="3"
                    placeholder="Your message"
                    required
                  ></textarea>
                </fieldset>

                <fieldset className="form-group text-center">
                  <button className="btn btn-primary" type="submit">
                    Envoyer Message
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
