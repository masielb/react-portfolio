import React from 'react';

// import '../styling/portfolio.css';

// import DogDays from '../imgs/DogDays.png';



const Portfolio = () => (
    <>
    <main className="container">
        <h1>Portfolio</h1>
        <div className="row">

          <section className="col-md-4">
            <a className="project project4" href="coffeehut.html">
              <img src="../assets/coffeeshop.jpg" alt="ordering menu"></img>
              <div className="overlay">
                <h3>CoffeeHut</h3>
              </div>
            </a>
          </section>

          <section className="col-md-4">
            <a className="project project1" href="takeoff.html">
              <img src="../assets/marstakeoff.jpeg" alt="astronaut on Mars"></img>
              <div className="overlay">
                <h3>Project Takeoff</h3>
              </div>
            </a>
          </section>
          
          <section className="col-md-4">
            <a className="project coffeehut" href="https://masielb.github.io/weather-dashboard/">
              <img  src="../assets/balazs-ketyi-unsplash.jpg" alt="AdobeXD app"></img>
              <div className="overlay">
                <h3>Weather Dashboard</h3>
              </div>
            </a>
          </section>
          
          <section className="col-md-4">
            <a className="project project3" href="https://masielb.github.io/daily-planner/">
              <img  src="../assets/tran-mau-unsplash.jpg" alt="Mac desktop"></img>
              <div className="overlay">
                <h3>Daily Planner</h3>
              </div>
            </a>
          </section>  
      
          <section className="col-md-4">
            <a className="project project4">
              <img src="../assets/nayeli-project.jpg" alt="photographer"></img>
              <div className="overlay">
                <h3>Franco Fields Photography</h3>
              </div>
            </a>
          </section>

          <section className="col-md-4">
            <a className="project project4">
              <img src="../assets/charles-deluvio-unsplash.jpg" alt=" UI design on two iphones"></img>
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