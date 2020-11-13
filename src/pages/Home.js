import React from 'react';

// import '../styling/home.css';
import beach from '../assets/beach.jpg';
import menupage from '../assets/menupage.png';
import takeoffspace from '../assets/takeoffspace.png';
import planner from '../assets/planner.png';
import weather from '../assets/weather.png';

const Home = () => (
    <div>  
        <div className="jumbotron text-center">
            <h1>Hi, I'm Masiel!</h1>
            <h5 class="pl-5 pr-5">I'm a web developer based in Durham, NC and a recent alumnus of the University of North Carolina-Chapel Hill. I love painting, pilates, and playing with my two pet dogs, Sadie and Toby. When I'm not in front of a screen, I enjoy gardening and taking care of my family's chickens.</h5>
        </div>
    
    <div className="container p-2">
        <div className="jumbotron">
            <h1 className="display-4 pb-3">About Me</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={beach} alt="profile picture" width="100%"></img>
                </div>

                <div className="col-md-8">
                    <p className="lead mt-4">Hey there,</p>
                    <p>I'm a Tar Heel born and bred who is constantly searching to learn new things. I recently graduated from the University of North Carolina at Chapel Hill where I studied Global Economics, Trade, and Development as well as Hispanic Linguistics. As a dedicated student and an avid tech user, I've learned first hand of the importance of the intersection between liberal arts and technology.</p>
                    <p>I decided to pursue computer programming when I noticed how web development and design allowed me to express more of my creativity. It also empowers me to work on projects end to end, from ideation all the way through development. I love aesthetically pleasing design and carefully organized code. For that reason, I decided to become a full-stack developer after completing my undergraduate career.</p>
                    <p>When I'm not locked infront of a screen, you'll catch me baking chocolate chip zucchini muffins, playing with my two dogs and six chickens, reading a book outdoors, or trying to recreate a ramen recipie.</p>
                    <p>You can find me on  <a href="https://www.linkedin.com/in/masielbautista/" class="icoLinkedin" title="Linkedin">LinkedIn</a>, check out my <a href="/assets/MasielBautistaResume.pdf" title="Masiel Bautista Resume">resume</a>, or shoot me an <a href="mailto:masiel3055@gmail.com" class="icoMail" title="Mail">email</a>. </p>
                    <p class="card-text"><small class="text-muted">Updated November 12, 2020</small></p>
                </div>
            </div>
        </div>
    </div>

        <div className="container p-2">
            <div className="jumbotron">
                <h1 className="display-4 pb-3">Recent Work</h1>
                <div className="row">
                    
                    <article class="row project1 mx-auto align-items-center">
                        <div class="col-md-8">
                            <a><h5>COFFEEHUT</h5></a>
                            <p >A web based application through which a user can order craft coffee drinks from their local coffee shop.</p>
                            <a class="tiny">GitHub Repository: https://github.com/masielb/project-2</a>
                            <a class="tiny">Deployed Version: https://project-2-team-7.herokuapp.com/</a>
                        </div>
                        <div class="col-md-4" id="intro-hut">
                            <img src={menupage} width="100%" class="intro-hut"></img>
                        </div>
                    </article>

                    <br></br>
                    
                    <article class="row project2 mx-auto align-items-center wrapper">
                        <div class="col-md-8">
                            <a><h5>PROJECT TAKEOFF</h5></a>
                            <p>An application inspired by recent space innovation that can help users plan fictional trips to mars.</p>
                            <a class="tiny" >GitHub Repository: https://github.com/masielb/project-takeoff</a>
                            <a class="tiny" >Deployed Version: https://masielb.github.io/project-takeoff/</a>
                        </div>
                        <div class="col-md-4">
                            <img src={takeoffspace} width="100%"></img>
                        </div>
                    </article>
                    <br></br>
                    <article class="row project3 mx-auto align-items-center">
                        <div class="col-md-8">
                            <a><h5>DAILY PLANNER</h5></a>
                            <p>Daily planning application that promotes productivity and effective time management!</p>
                            <a class="tiny">GitHub Repository: https://github.com/masielb/daily-planner</a>
                            <a class="tiny">Deployed Version: https://masielb.github.io/daily-planner/</a>
                        </div>
                        <div class="col-md-4">
                            <img src={planner} width="100%"></img>
                        </div>
                    </article>
                    <br></br>
                    <article class="row project4 mx-auto align-items-center wrapper">
                        <div class="col-md-8">
                            <a><h5>WEATHER DASHBOARD</h5></a>
                            <p>Simple weather tracker that allows users to follow weather forcasts and reports of multiple cities chosen by the invdividual.</p>
                            <a class="tiny" >GitHub Repository: https://github.com/masielb/weather-dashboard</a>
                            <a class="tiny">Deployed Version: https://masielb.github.io/weather-dashboard/</a>
                        </div>
                        <div class="col-md-4">
                            <img src={weather} width="100%"></img>
                        </div>  
                    </article>
                </div>
            </div>
        </div>
    </div>
);

export default Home;