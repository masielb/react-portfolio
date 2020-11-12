import React from "react";

function About() {
    return (
    <div className="App">
      <div className="App-header">
        <span className="about-container">
          <div className="row">
            <div className="col-sm-3">
                <p>TBD</p>
            </div>   

            <div className="col-sm-9">
              <div className="about-container-text">
                <h2 id="about-header">Hello!</h2>
                <p id="about-text">
                    My name is... </p>
              
                <p id="about-text">
                I am passionate about... </p>

                <p id="about-text">
                Reach out... </p>
              </div>
            </div>

          </div>
        </span>
      </div>
    </div>
  );
}

export default About;