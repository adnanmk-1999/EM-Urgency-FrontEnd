import React from 'react';
import { Carousel, Card, Button, Row, Col, Container } from 'react-bootstrap';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import './home.css';
import emergencyAlert from '../../images/emergencyAlert.png'
import microsoftLogo from '../../images/microsoftLogo.png'
import buildAKit from '../../images/buildAKit.png'
import flooding from '../../images/flooding.png'
import getVaccinated from '../../images/getVaccinated.png'
import makeAPlan from '../../images/makeAPlan.png'
import preparednessVideos from '../../images/preparednessVideos.png'




function homePage() {
    return (
        <>
            <Carousel >
                <Carousel.Item style={{ backgroundColor: 'white' }}>
                    <img
                        className="homeImage img-fluid"
                        src={home1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: 'white' }}>
                    <img
                        className='homeImage img-fluid '
                        src={home2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
  </Carousel.Item> */}
            </Carousel>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className='welcomeText'>Welcome</h1>

                        <Card className='welcomeCard'>
                            <Card.Body>

                                <Card.Text className='welcomeContent'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris lacinia est ut erat semper iaculis.
                                    Integer luctus augue mauris, et euismod neque aliquam quis.
                                    Donec in iaculis diam.
                                    Duis nunc lectus, posuere sed tincidunt eget, vestibulum et tellus.
                                    Integer luctus erat quis imperdiet iaculis. Suspendisse in lacus egestas, sodales dui nec, volutpat neque.
                                </Card.Text>
                                <center><Button variant="danger" className="welcomeButton">Learn More</Button></center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className='tileContainer'>
                <Row>
                    <Col md={6} >
                        <Card className='tileCard'>
                            <Container>
                                <Row>
                                    <Col xs={4} sm={3} md={3}>
                                        <Card.Img className='tileImage'  src={flooding}/>

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                        <Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Flooding</Card.Title>
                                            <Card.Text  >
                                            If you approach a flooded road or walkway, follow this rule: turn around, don't drown!
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>

                            </Container>

                        </Card>
                    </Col>
                    <Col md={6} >
                        <Card className='tileCard'>
                            <Container>
                                <Row>
                                    <Col xs={4} sm={3} md={3}>
                                        <Card.Img className='tileImage'  src={preparednessVideos}/>

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                        <Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Preparedness Videos</Card.Title>
                                            <Card.Text  >
                                            Learn how to prepare for disasters with Ready’s preparedness videos and public service announcements
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>

                            </Container>

                        </Card>
                    </Col>

                    

                </Row>
                {/*Row 2*/}

                <Row>
                    <Col md={6} >
                        <Card className='tileCard'>
                            <Container>
                                <Row>
                                    <Col xs={4} sm={3} md={3}>
                                        <Card.Img className='tileImage'  src={emergencyAlert}/>

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                        <Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Emergency Alerts</Card.Title>
                                            <Card.Text  >
                                            Wireless emergency alerts allow officials to provide the public with life-saving information quickly.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>

                            </Container>

                        </Card>
                    </Col>
                    <Col md={6} >
                        <Card className='tileCard'>
                            <Container>
                                <Row>
                                    <Col xs={4} sm={3} md={3}>
                                        <Card.Img className='tileImage'  src={makeAPlan}/>

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                        <Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Make a Plan</Card.Title>
                                            <Card.Text  >
                                            Be Prepared. Make an emergency plan today and practice it.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>

                            </Container>

                        </Card>
                    </Col>

                    

                </Row>
                {/*Row 3*/}

                <Row>
                    <Col md={6} >
                        <Card className='tileCard'>
                            <Container>
                                <Row>
                                    <Col xs={4} sm={3} md={3}>
                                        <Card.Img className='tileImage'  src={buildAKit}/>

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                        <Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Build a Kit</Card.Title>
                                            <Card.Text  >
                                            Make sure your emergency kitstocked with the right items.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>

                            </Container>

                        </Card>
                    </Col>
                    <Col md={6} >
                        <Card className='tileCard'>
                            <Container>
                                <Row>
                                    <Col xs={4} sm={3} md={3}>
                                        <Card.Img className='tileImage'  src={getVaccinated}/>

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                        <Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Get Vaccinated</Card.Title>
                                            <Card.Text  >
                                            COVID-19 vaccines are free and available to anyone five and older who wants one.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>

                            </Container>

                        </Card>
                    </Col>

                    

                </Row>


            </Container>


        </>
    );
}

export default homePage;