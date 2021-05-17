import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import aboutMe from "../Assets/Images/portfolio/aboutMeSelfie.jpg";
import aboutMe2 from "../Assets/Images/portfolio/aboutMe.jpg";

import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <div className="page-header" style={{ paddingBottom: "20px" }}>
              <h1>About Me</h1>
            </div>
            <Row>
              <Col size="md-6">
                <div className="box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, felis ut dictum tristique,
                    nibh erat feugiat libero, sit amet fringilla mauris velit in mi. Duis tempus felis vitae
                    felis vulputate pretium. Nullam commodo, est ac auctor ornare, eros nisi fringilla sem,
                    non pulvinar tortor lorem sit amet sem. Aenean quis erat facilisis, porttitor ex cursus,
                    luctus enim. Curabitur et metus in lacus tristique sagittis et in lorem. Nunc id nisi et
                    neque fringilla ultricies.
            </p>
                </div>
              </Col>

              <Col size="md-1" />

              <Col size="md-5">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" />
                    <li data-target="#carouselExampleCaptions" data-slide-to="2" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={aboutMe} className="d-block w-100" alt="shelly in picnic"
                        height="500px" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Shelly in picnic</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={aboutMe2} className="d-block w-100" alt="shelly selfie"
                        height="500px" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Shelly selfie</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </Col>
            </Row>

          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default About;
