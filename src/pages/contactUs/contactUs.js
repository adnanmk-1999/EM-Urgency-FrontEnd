import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ContactImage from '../../images/contactUs.png';
import gmail from '../../images/gmail.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';

import './contactUs.css';


function ContactUs() {
    return (
        <>
            <div className='textImage'>
                <div className='titleContact'>
                    <h1 >Contact Us</h1>
                    <center><div style={{ height: 6, width: '12%', backgroundColor: "#FC816D" }}></div></center>
                    <h2 style={{ paddingTop: '3%', fontWeight: 'lighter' }}>Get in touch  </h2>
                </div>
                <img src={ContactImage} className='img-fluid shadow-4 contactImage' alt='contact'></img>
            </div>

            <Container style={{ marginTop: 25 }}>
                <Row>
                    <Col md={4} >
                        <Card style={{ marginTop: 15, border: "none" }}>
                            <center><Card.Img className='imageCardMS' variant="top" src={gmail} /></center>
                            <Card.Body >
                                <Card.Text className='cardText'>
                                    We would love to solve your queries <br />
                                    <a href="mailto: emurgency.experion@gmail.com" target="_blank" rel="noopener noreferrer" className='anchor'>emurgency.experion@gmail.com</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col md={4} >
                        <Card style={{ marginTop: 15, border: "none" }}>
                            <center><Card.Img className='imageCard' variant="top" src={twitter} /></center>
                            <Card.Body>
                                <Card.Text className='cardText'>
                                    We would love to keep you updated <br />
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="anchor">em_urgency</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} >
                        <Card style={{ marginTop: 15, border: "none" }}>
                            <center><Card.Img className='imageCard' variant="top" src={facebook} /></center>
                            <Card.Body >
                                <Card.Text className='cardText'>
                                    We would love to be in touch with you <br />
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="anchor">em_urgency</a>
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

export default ContactUs;