import React from 'react';
import './contactUs.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ContactImage from '../../images/contactUs.png';

function ContactUs(){
    return (
        <>
           <div className='textImage'>
               <div className='titleContact'>
                    <h1 >Contact Us</h1>
                    <center><div style={{height:6, width:'12%', background: "linear-gradient(to right, #E31836 , #E42F24)"}}></div></center>
               </div>
                <img src = {ContactImage} className='img-fluid shadow-4 contactImage' alt = 'contact'></img>
            </div>

            <Container>
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <h1 className='cardHeading'>Who we are?</h1>
                        <Card style={{marginTop: 15, backgroundColor: "#F9F0F0" }}>

                            <Card.Body style={{ textAlign: "center"}}>
                                <Card.Text style={{ textAlign: "left" }}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={12} sm={4} md={4} lg={4}>
                        <h1 className='cardHeading'>What we provide?</h1>
                        <Card style={{marginTop: 15, backgroundColor: "#F9F0F0" }}>
                            <Card.Body style={{textAlign: "center"}}>
                                <Card.Text style={{ textAlign: "left" }}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={4} md={4} lg={4}>
                        <h1 className='cardHeading'>Why choose us?</h1>
                        <Card style={{marginTop: 15, backgroundColor: "#F9F0F0" }}>
                            <Card.Body style={{textAlign: "center"}}>
                                <Card.Text style={{ textAlign: "left" }}>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio.
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