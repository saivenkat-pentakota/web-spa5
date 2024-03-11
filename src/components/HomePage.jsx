import React from "react";
import "./HomePage.css";
import heroimg from "../images/hero-img.png";
import NavBar from '../components/NavBar';
import AboutUs from "./AboutUs";

function HomePage() {
  return (
    <>
    <NavBar/>
    <div className="container-fluid pt-5 bg-primary hero-header mb-5">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
              AI.Tech
            </div>
            <h1 className="display-4 text-white mb-4 animated slideInRight">
              Artificial Intelligence for Your Business
            </h1>
            <p className="text-white mb-4 animated slideInRight">
              Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
              dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
              sit
            </p>
            <a
              href="#readmore"
              className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
            >
              Read More
            </a>
            <a
              href="#contactus"
              className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
            >
              Contact Us
            </a>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-fluid" src={heroimg} alt="heroimg" />
          </div>
        </div>
      </div>
    </div>
    <AboutUs/>
    </>
  );
}

export default HomePage;
