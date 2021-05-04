import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import project from "../components/Images/Hwk_2.PNG"

function Portfolio() {
    return (
        <div>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1 id="portfolio">Projects Completed</h1>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col size="md-6">
                        <h2>ADOME,Inc.</h2>
                            <img className="image" src={project} alt="Profile Pic" />;
                        <p>
                            <img className="image" src={profile} alt="Profile Pic" />;
            </p>

                    </Col>
                    <Col size="md-6">
                        <h2>Weather API</h2>
                        <p>
                            Coming Soon
            </p>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <h2>Third-Part APIs Work-Day Scheduler</h2>
                        <p>
                            Coming Soon
            </p>

                    </Col>
                    <Col size="md-6">
                        <h2>Password Generator</h2>

                        <p>
                            Coming Soon
            </p>

                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
Business Inventory

                    </Col>
                    <Col size="md-6">


                    </Col>
                </Row>
            </Container>

                <br></br>
                 <br></br>
 
        </div>
    );
}

export default Portfolio;
