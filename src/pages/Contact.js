import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";

import Row from "../components/Row";
import Col from "../components/Col";
import { Link } from "react-router-dom";


function Contact() {
    return (
      <div>
        <Container >      
        <Row>
            <Col size="md-12">
                <h2 style={{paddingTop: "20px"}}><strong>Contact</strong></h2>
            </Col>
            <Col size="md-7">
                <form style={{paddingTop: "10px"}}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1"
                            placeholder="Last name / First name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect2">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-info">
                      <Link className={window.location.pathname === "/submit" ? "nav-link active" : "nav-link"} to="./submit">Submit</Link>
                      </button>
                </form>
            </Col>
        </Row>
   
        </Container>
      </div>
    );}

export default Contact;
