import React from 'react';
// import aboutUs from '../../images/aboutUs.png';
import './aboutUs.css';
import { Card, Col, Row, Container } from 'react-bootstrap';
import AboutImage from '../../images/aboutUs.png';

function AboutUs() {
    return (
        <>
            <div className='textImage'>
               <div className='titleAbout'>
                    <h1>About Us</h1>
                    <div style={{height:6, width:'12%', background: "linear-gradient(to right, #E31836 , #E42F24)"}}></div>
                    <h2>Advancing technology for <br/> humanity</h2>
               </div>
                <img src = {AboutImage} className='img-fluid shadow-4 aboutImage' alt = 'about'></img>
            </div>

            <Container>
                <Row>
                    <Col md={4}>
                        <h1 className='cardHeading'>Who we are?</h1>
                        <Card style={{marginTop: 15, backgroundColor: "#F9F0F0" }}>

                            <Card.Body >
                                <Card.Text  className='cardText'>
                                Experion Technologies is a 14+ year old IT solutions & services company with a focus on digital technologies. With over 300 customers across 32 countries, Experion uses the power of Mobile, Web, Analytics, Cloud, and Digital technologies to unlock the potential of businesses across verticals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col md={4}>
                        <h1 className='cardHeading'>What we provide?</h1>
                        <Card style={{marginTop: 15, backgroundColor: "#F9F0F0"}}>
                            <Card.Body >
                                <Card.Text  className='cardText'>
                                EM-Urgency provides monitoring and handling all events, announcements & holidays occurring throughout the IT services and systems of the Experion Technologies. All the alerts are notified via email. Employees can respond to the email by clicking on the link provided and share their responses.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={4} >
                        <h1 className='cardHeading'>Why choose us?</h1>
                        <Card style={{marginTop: 15, backgroundColor: "#F9F0F0" }}>
                            <Card.Body >
                                <Card.Text  className='cardText'>
                                We focus on serving the Enterprise, ISV, and Startup segments across the Retail, Transportation, Healthcare, Financial services domains. Headquartered in Trivandrum, India. We have offices around the globe including the United States, United Kingdom, Switzerland, Netherlands, Australia etc...
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </>
    );
}

export default AboutUs;