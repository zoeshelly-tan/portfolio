import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import schedule from "../Assets/Images/portfolio/schedule.png";
import passwordGenerator from "../Assets/Images/portfolio/password-generator.png";
import student from "../Assets/Images/portfolio/student bio w1.png";
import hendrix from "../Assets/Images/hendrix.png"

function Portfolio() {
    return (
        <div>
            <section class="jumbotron text-center">
                <Container>
                    <div class="cleaner_h10"></div>
                    <p>Thank you for interesting in my portfolio, please do not hestiste to open the link get get to know more about me.</p>
                    <div class="button_01"><a href="Assets/resume.pdf">Resume</a></div>

                    <a style={{ display: "table-cell" }} href="https://www.linkedin.com/in/zhuolin-tan-6b418ba3/" target="_blank">linkedin</a>
                    <br />

                    <a style={{ display: "table-cell" }} href="https://github.com/zoeshelly-tan" target="_blank">Github</a>

                </Container>
            </section>
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1 style={{paddingTop: "10px"}}>Portfolio</h1>
                        <Col size="mb-4">
                            <div className="card">
                                <img src={passwordGenerator} className="card-img-top" alt="booststrap" />
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text">The purpose of the web page is when the user would like to a generate a random
                  number of password and the page will provide them with the desire content and length.</p>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href="https://zoeshelly-tan.github.io/password-generator/" target="_blank">View
                  Website</a>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/zoeshelly-tan/password-generator/blob/main/index.html" target="_blank">View
                                                code</a>

                                </div>
                            </div>
                        </Col>
                        <Col size="mb-4">
                            <div className="card">
                                <img src={schedule} className="card-img-top" alt="header" />
                                <div className="card-body">
                                    <h5 className="card-title">Schedule Builder</h5>
                                    <p className="card-text">Purpose: this website is build for users to arrange their schedule inside..</p>
                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href="https://zoeshelly-tan.github.io/schedule_builder/" target="_blank">View
                  Website</a>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/zoeshelly-tan/schedule_builder/blob/main/index.html" target="_blank">View
                                                code</a>
                                </div>
                            </div>
                        </Col>

                        <Col size="mb-4">
                            <div className="card">
                                <img src="/Assets/Images/portfolio/weather-dashboard.png" className="card-img-top" alt="layout" />
                                <div className="card-body">
                                    <h5 className="card-title">Weather Dashboard</h5>
                                    <p className="card-text">For the user like to travel around
                                    This website able to tell them about the real time weather of the location they search for and also
                                    the 5 day forecast.
                </p>
                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href="https://zoeshelly-tan.github.io/weather_forecast/" target="_blank">View
                  Website</a>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/zoeshelly-tan/weather_forecast/blob/main/index.html" target="_blank">View
                                                code</a>
                                </div>
                            </div>
                        </Col>
                        <Col size="mb-4">
                            <div className="card">
                                <img src="./Assets/Images/portfolio/front_page.png" className="card-img-top" alt="student bio float" />
                                <div className="card-body">
                                    <h5 className="card-title">quize_page</h5>
                                    <p className="card-text">This website is build up for the user that want to test out their coding knowledge.
                </p>
                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href="https://zoeshelly-tan.github.io/password-generator/" target="_blank">View
                  Website</a>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/zoeshelly-tan/password-generator/blob/main/index.html" target="_blank">View
                                                code</a>

                                </div>
                            </div>
                        </Col>
                        <Col size="mb-4">
                            <div className="card">
                                <img src={student} className="card-img-top" alt="student bio w1" />
                                <div className="card-body">
                                    <h5 className="card-title">Student bio w1</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href="https://zoeshelly-tan.github.io/password-generator/" target="_blank">View
                  Website</a>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/zoeshelly-tan/password-generator/blob/main/index.html" target="_blank">View
                                                code</a>
                                </div>
                            </div>
                        </Col>
                        <Col size="col mb-4">
                            <div className="card">
                                <img src={hendrix} className="card-img-top" alt="student bio w1" />
                                <div className="card-body">
                                    <h5 className="card-title">Hendrix</h5>
                                    <p className="card-text">Working with a team of developers, we set out to create an application incorporating a MVC and a mySQL server. The main purpose of this application is to provide a platform for businesses to not only promote their pages but for consumers to voice their opinions of their service. The website allows business owners and consumers to create accounts and freely post reviews..</p>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-info" href="https://powerful-cliffs-81150.herokuapp.com/login" target="_blank">View
                  Website</a>

                                    <a style={{ display: "table-cell" }} type="button" className="btn btn-primary" href="https://github.com/silvia-taliana/hendrix" target="_blank">View
                                                code</a>

                                </div>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Portfolio;