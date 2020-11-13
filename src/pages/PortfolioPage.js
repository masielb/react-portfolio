import React from 'react';

// import '../styling/portfolio.css';

import coffeeshop from '../assets/coffeeshop.jpg';
import marstakeoff from '../assets/marstakeoff.jpeg';
import balazs from '../assets/balazs-ketyi-unsplash.jpg';
import tran from '../assets/tran-mau-unsplash.jpg';
import nayeli from '../assets/nayeli-project.jpg';
import deluvio from '../assets/charles-deluvio-unsplash.jpg';


const Portfolio = () => (
    <>
    <main className="container">
        <h1>Portfolio</h1>
        <div className="row">

          <section className="col-md-4">
            <a className="project project4" href="coffeehut.html">
              <img src={coffeeshop} alt="ordering menu" width="100%"></img>
              <div className="overlay">
                <h3>CoffeeHut</h3>
              </div>
            </a>
          </section>

          <section className="col-md-4">
            <a className="project project1" href="takeoff.html">
              <img src={marstakeoff} alt="astronaut on Mars" width="100%"></img>
              <div className="overlay">
                <h3>Project Takeoff</h3>
              </div>
            </a>
          </section>
          
          <section className="col-md-4">
            <a className="project coffeehut" href="https://masielb.github.io/weather-dashboard/">
              <img  src={balazs} alt="AdobeXD app" width="100%"></img>
              <div className="overlay">
                <h3>Weather Dashboard</h3>
              </div>
            </a>
          </section>
          
          <section className="col-md-4">
            <a className="project project3" href="https://masielb.github.io/daily-planner/">
              <img  src={tran} alt="Mac desktop" width="100%"></img>
              <div className="overlay">
                <h3>Daily Planner</h3>
              </div>
            </a>
          </section>  
      
          <section className="col-md-4">
            <a className="project project4">
              <img src={nayeli} alt="photographer" width="100%"></img>
              <div className="overlay">
                <h3>Franco Fields Photography</h3>
              </div>
            </a>
          </section>

          <section className="col-md-4">
            <a className="project project4">
              <img src={deluvio} alt=" UI design on two iphones" width="100%"></img>
              <div className="overlay">
                <h3>Astronaut</h3>
              </div>
            </a>
          </section>

        </div>
        
    </main>
    </>
);

export default Portfolio;