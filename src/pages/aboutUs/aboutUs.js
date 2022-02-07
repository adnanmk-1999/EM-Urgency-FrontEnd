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
                    <h2>Lorem ipsum is simply dummy text <br/>of the printing</h2>
               </div>
                <img src = {AboutImage} className='img-fluid shadow-4 aboutImage' alt = 'about'></img>
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

export default AboutUs;