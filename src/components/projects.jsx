import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{ backgroundImage: 'url(images/Herditama.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="https://herditama.netlify.com/">Hotel reservation</a></h3>
                      <span>Hotel reservation App designed with reactjs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: 'url(images/dispache.png)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="https://dispache.netlify.com/" >Todolist </a></h3>
                      <span>Designed with REact,Firebase and css</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                <div className="project" style={{ backgroundImage: 'url(images/Music_App.png)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="work.html">Music App</a></h3>
                      <span>Music App designed with react and using deezer API</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                <div className="project" style={{ backgroundImage: 'url(images/monster.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="https://github.com/eddieir/Hayola">Hayola framework</a></h3>
                      <span>deep learning model that takes hand-drawn web mockups and converts them into working HTML code</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <div className="project" style={{ backgroundImage: 'url(images/recommendation_system.jpg)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="https://github.com/eddieir/Recommendation_systems">recommendation system</a></h3>
                      <span>Movie and Book recommendation systems</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                <div className="project" style={{ backgroundImage: 'url(images/1*q-h6a_z8IAiBwKZDhR0FhA.png)' }}>
                  <div className="desc">
                    <div className="con">
                      <h3><a href="https://github.com/eddieir/live_twitter_sentiment_analysis">twitter sentiment analysis</a></h3>
                      <span>twitter sentiment analysis with/without mood </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}