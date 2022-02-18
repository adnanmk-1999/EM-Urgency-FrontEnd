import React from 'react';
import './contactUs.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ContactImage from '../../images/contactUs.png';
import gmail from '../../images/gmail.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'


function ContactUs() {
    return (
        <>
            <div className='textImage'>
                <div className='titleContact'> 
                    <h1 >Contact Us</h1>
                    <center><div style={{ height: 6, width: '12%',  backgroundColor: "#FC816D" }}></div></center>
                    <h2 style={{paddingTop:'3%',fontWeight:'lighter'}}>Get in touch  </h2>

                </div>
                <img src={ContactImage} className='img-fluid shadow-4 contactImage' alt='contact'></img>
            </div>

            <Container>
                <Row>
                    <Col md={4} >
                        <Card style={{ marginTop: 15, border: "none" }}>
                            <center><Card.Img className='imageCardMS' variant="top" src={gmail} /></center>
                            <Card.Body >
                                <Card.Text  className='cardText'>
                                    We would love to solve your queries <br/>
                                emurgency.experion@gmail.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col  md={4} >
                        <Card style={{ marginTop: 15, border: "none" }}>
                            <center><Card.Img className='imageCard' variant="top" src={twitter} /></center>
                            <Card.Body>
                                <Card.Text  className='cardText'>
                                We would love to keep you updated <br/>
                                    em_urgency
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={4} >
                        <Card style={{ marginTop: 15, border: "none" }}>
                            <center><Card.Img className='imageCard' variant="top" src={facebook} /></center>
                            <Card.Body >
                                <Card.Text className='cardText'>
                                    {/* At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. */}
                                    We would love to be in touch with you <br/>
                                    em_urgency
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