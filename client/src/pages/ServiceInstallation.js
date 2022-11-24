import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Form, Button } from "react-bootstrap";
import "../style/ServiceInstallation.css";

const ServiceInstallation = () => {
  return (
    <>
      <div className="allinstallation">
        <div className="firstinstall">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="ei1.jpeg"
                alt="First slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="ei2.jpeg"
                alt="Second slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="ei3.jpg"
                alt="Third slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="iri1.jpg"
                alt="First slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="iri2.jpg"
                alt="Second slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="iri3.jpg"
                alt="Third slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
          </Carousel>
          <br></br>

          <h3>Courant Fort et Faible</h3>
          <p>
            <ul>
              <li>4</li>
              <li>5</li>
              <li>3</li>
              <li>1</li>
              <li>11</li>
              <li>22</li>
            </ul>
          </p>
        </div>
        <div className="secondinstall">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="cs3.png"
                alt="First slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="cs1.jpg"
                alt="Second slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="cs2.jfif"
                alt="Third slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="sa1.jpg"
                alt="First slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="sa2.png"
                alt="Second slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="sa3.jpg"
                alt="Third slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
          </Carousel>
          <br></br>

          <h3>2</h3>
          <p>
            <ul>
              <li>12</li>
              <li>13</li>
              <li>124</li>
              <li>22</li>
            </ul>
          </p>
        </div>
        <div className="thirdinstall">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="pointeuse.jpg"
                alt="First slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="son.webp"
                alt="Second slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="badge.jpg"
                alt="Third slide"
                style={{ width: "50px", height: "200px" }}
              />
            </Carousel.Item>
          </Carousel>
          <br></br>

          <h3>5</h3>
          <br></br>
          <p>
            <ul>
              <li>555</li>
              <li>77</li>
              <li>54</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="devis">
        {/* <h1 className="h3">Besoin d'aide? Rejoigner Nous!</h1> */}

        <div action="" method="">
          <div className="message-devis">
            <h3>Besoin d'aide? Rejoigner Nous!</h3>
          </div>
          <fieldset className="form-group2">
            <label for="formName">Votre Nom:</label>
            <input
              id="formName"
              className="form-control"
              type="text"
              placeholder="Your Name"
              required
            />
          </fieldset>

          <fieldset className="form-group2">
            <label for="formEmail1">Email:</label>
            <input
              id="formEmail1"
              className="form-control"
              type="email"
              placeholder="Enter email"
              required
            />
          </fieldset>
          <fieldset className="form-group2">
            <label for="formEmail1">Votre Message:</label>

            <input
              id="formMessage"
              className="form-control"
              type="string"
              placeholder="Your message"
              required
            />
          </fieldset>

          <fieldset className="form-group text-center2">
            <button className="btn btn-primary" type="submit">
              Envoyer Message
            </button>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default ServiceInstallation;
