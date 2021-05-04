import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profile from "../components/Images/AQC_Headshot.PNG"

function About() {
    return (
        <div>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="about" id="about">About me</h1>
                    </Col>

                </Row>
                <br></br>
                <Row>
                    <Col size="md-10">
                        <p>
                            With an engineering background, Alicia Qiu Cheung has derived a passion of writing code to
                            logically tackle problems.
                            She is currently involved in the University of Arizona (Trilogy) Coding Boot Camp in which
                            she obtained proficient knowledge in full-stack programming that includes JavaScript, HTML,
                            CSS, jQuery, Boostrap, and Node.js.
                            She has the ability to learn quickly and enjoys self-learning by reading coding books and
                            practicing. She graduated from University of Nevada, Las Vegas with a B.S and M.Eng in Civil
                            and environmental engineering.
                            My thesis was on removing disinfection by-products from drinking water which helped me win
                            the First-Place award from a prestigious water organization, CA-NV American Water Works
                            Association.
                            I am very well organized, detail oriented, ability to multi-task, excellent time-management,
                            planning and prioritization
                            She has excellent communication skills, both verbal and written. Strong organizational and
                            communication skills. Excellent verbal, interpersonal and written communication skills.
            </p>

                    </Col>
                    <Col size="md-4">
                        <p>
                            <img className="profile" src={profile} alt="Profile Pic" />;

                    </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
