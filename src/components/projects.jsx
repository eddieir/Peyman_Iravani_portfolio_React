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
            <div class="view view-tenth">
              <img src="images/Herditama.jpg" width='300px' height='200px' />
              <div class="mask">
                <h2>Hotel reservation app</h2>
                <p>Hotel reservation App <br />designed by reactjs</p>
                <a href="https://herditama.netlify.com/" class="info">Read More</a>
              </div>
            </div>
            <div class="view view-tenth">
              <img src="images/dispache.png" width='300px' height='200px' />
              <div class="mask">
                <h2>Todolist app</h2>
                <p>Todolist App <br />designed by reactjs<br />Used react hooks </p>
                <a href="https://dispache.netlify.com/" class="info">Read More</a>
              </div>
            </div>
            <div class="view view-tenth">
              <img src="images/Music_App.png" width='300px' height='200px' />
              <div class="mask">
                <h2>Music player app</h2>
                <p>Music player App <br />designed by reactjs<br />Used deezer api </p>
                <a href="https://eddieir.github.io/Music_App_React/" class="info">Read More</a>
              </div>
            </div>

            <div class="view view-tenth">
              <img src="images/monster.jpg" width='300px' height='200px' />
              <div class="mask">
                <h2>Hayola framework</h2>
                <p>Deep learning model<br />Takes hand-written web mockups<br />provides HTML code </p>
                <a href="https://github.com/eddieir/Hayola" class="info">Read More</a>
              </div>
            </div>

            <div class="view view-tenth">
              <img src="images/recommendation_system.jpg" width='300px' height='200px' />
              <div class="mask">
                <h2>Recommendation systems</h2>
                <p>Movie and books recommendation systems</p>
                <a href="https://github.com/eddieir/Recommendation_systems" class="info">Read More</a>
              </div>
            </div>

            <div class="view view-tenth">
              <img src="images/1*q-h6a_z8IAiBwKZDhR0FhA.png" width='300px' height='200px' />
              <div class="mask">
                <h2>Twitter sentiment anslysis</h2>
                <p>twitter sentiment analysis with/without mood</p>
                <a href="https://github.com/eddieir/live_twitter_sentiment_analysis" class="info">Read More</a>
              </div>
            </div>

            <div class="view view-tenth">
              <img src="images/image-01-2019-ncov.jpg" width='300px' height='200px' />
              <div class="mask">
                <h2>CoronaVirus anslysis</h2>
                <p>Coronavirus analysis and visulization </p>
                <a href="https://github.com/eddieir/Corona_Analysis" class="info">Read More</a>
              </div>
            </div>

            <div class="view view-tenth">
              <img src="images/Analyst-believes-Bitcoin-price-is-priming-for-buy-zone-750x375.jpg" width='300px' height='200px' />
              <div class="mask">
                <h2>Bitcoin prediction</h2>
                <p>Bitcoin prediction using LSTM neural net </p>
                <a href="https://github.com/eddieir/bitcoin_prediction" class="info">Read More</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

