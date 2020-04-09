import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sotware Enginner (Frontend developer / QA engineer)  at WindTre SPA <span>June 2019-present</span></h2>
                        <p>
                          On Behalf of Altran Spa, I am working at WindTre company which is one of the top Telecom companies in Italy.
                        <br />
                        Key Qualifications and Responsibilities:
                        <br />
                        1. Frontend developer:
                        <br />
                        1.1 Implement eCommerce websites from the concept through the development by using Angularjs,HTML5,SASS
                        <br />
                        1.2 Standardized all output with a new, responsive design
                        <br />
                        1.3 Collaboration with the product team to implement new feature developments
                        <br />
                        2. QA Engineer:
                        <br />
                        2.1 Collaborate with developers to provide bug-free apps towards the clients
                        <br />
                        2.2 Design the framework that capable to do the automation test at website, Android and IOS apps by using Selenium, Python and appium
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>NLP developer - Vodafone Italy <span>June 2019</span></h2>
                        <p>
                          This experience refers to the Vodafone Tobi Hackathon. The main idea of this hackathon was design the app that helps disabled people. Our team came with the idea to design the app with the concentration of blind and half-blind people. This app has the frontend of Android and backend was designed by Python with the NLP methodology, at the backend, I designed the NLP which receiving the information from the user over the voice and doing the speech-to-text and then looking at the vocabulary dictionary that provided when it finds it does the text-to-speech and send it to the user. By this idea, our team won the first place.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Backend developer - Bosch Gmbh <span>September 2018</span></h2>
                        <p>
                          This experience refers to Bosch mobility hackathon. This event was held at Milan and our team designed the idea for managing park slots at Milan by using GPS sensors and by this methodology we are able to track the cars as well as sending the information to police and firefighters and emergency. The frontend was done by Android and the backend was designed by Nodejs for the tracking system of cars as well as storing the information by the provided API at Database (Database was implemented by MongoDB)
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master of Computer and communication network engineering - Polytechnic of Turin <span>2014-2018</span></h2>
                        <p>
                          <strong>Course projects:</strong>
                          <br />
                        Radio coverage of Ireland by using RadioMobile software –Radio planning course project-July 2016
                        Network performance and reliability measurement-network measurement lab Project-January 2016
                        <br />
                          <strong>Master thesis:</strong>
                          <br />
                        I was the exchange master student from Polytechnic of Turin to RWTH University of Aachen. The topic of my master thesis was reducing the power consumption inside the datacenter which had two main phases:
                        Prediction and optimization. Phase one referred to the prediction of the behaviour of the consumed inside
                        this environment and it was done by using time-series forecasting and ARIMA (Autoregressive integrated
                        moving average), implemented by Python programming and I got 98% accuracy without overfitting. Phase two
                        was referred to reducing the overall consumed power, which implemented by python programming with the
                        help of Grubi solver and the final result was reducing the consumed power of 13KW.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor of software engineering - Damavand Islamic Azad University <span>2008-2013</span></h2>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}