import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './home.css';

import emergencyAlert from '../../images/emergencyAlert.png'
import buildAKit from '../../images/buildAKit.png'
import flooding from '../../images/flooding.png'
import getVaccinated from '../../images/getVaccinated.png'
import makeAPlan from '../../images/makeAPlan.png'
import preparednessVideos from '../../images/preparednessVideos.png'



import Carousel from "../../components/carousel"


function homePage() {
    return (
        <>
            <Carousel />
          
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className='welcomeText'>Welcome</h1>

                        <Card className='welcomeCard'>
                            <Card.Body>

                                <Card.Text className='welcomeContent'> 
                                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris lacinia est ut erat semper iaculis.
                                    Integer luctus augue mauris, et euismod neque aliquam quis.
                                    Donec in iaculis diam.
                                    Duis nunc lectus, posuere sed tincidunt eget, vestibulum et tellus.
                                    Integer luctus erat quis imperdiet iaculis. Suspendisse in lacus egestas, sodales dui nec, volutpat neque. */}
                                    Software systems enable enterprises to operate businesses efficiently while managing growth effectively. With changing organizational practices and rapidly improving technology, modern enterprises have started to rely more on such software systems. They are now investing in futuristic technologies that transform businesses.
                                </Card.Text>
                                <center><Button variant="danger" className="welcomeButton" href="http://www.experionglobal.com/service/digital-transformation/" target='_blank' rel="noopener noreferrer">Learn More</Button></center>
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
                                        <Card.Img className='tileImage' src={flooding} />

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                    <a href="https://youtu.be/iQuwhR99YdA" target="_blank" rel="noopener noreferrer"><Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Flooding</Card.Title>
                                            <Card.Text  className="anchor">If you approach a flooded road or walkway, follow this rule: turn around, don't drown!
                                            </Card.Text>
                                        </Card.Body></a>
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
                                        <Card.Img className='tileImage' src={preparednessVideos} />

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                    <a href="https://youtu.be/yiXHOBM_cjs" target="_blank" rel="noopener noreferrer"><Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Preparedness Videos</Card.Title>
                                            <Card.Text className='anchor' >
                                                Learn how to prepare for disasters with Ready’s preparedness videos and public service announcements
                                            </Card.Text>
                                        </Card.Body></a>
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
                                        <Card.Img className='tileImage' src={emergencyAlert} />

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                    <a href="https://youtu.be/9yLd2AjGzYI" target="_blank" rel="noopener noreferrer"><Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Emergency Alerts</Card.Title>
                                            <Card.Text className='anchor' >
                                                Wireless emergency alerts allow officials to provide the public with life-saving information quickly.
                                            </Card.Text>
                                        </Card.Body></a>
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
                                        <Card.Img className='tileImage' src={makeAPlan} />

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                    <a href="https://youtu.be/TybjwGLHA88" target="_blank" rel="noopener noreferrer"><Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Make a Plan</Card.Title>
                                            <Card.Text className='anchor' >
                                                Be Prepared. Make an emergency plan today and practice it.
                                            </Card.Text>
                                        </Card.Body></a>
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
                                        <Card.Img className='tileImage' src={buildAKit} />

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                    <a href="https://youtu.be/KKN7Ewht1DQ" target="_blank" rel="noopener noreferrer"><Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Build a Kit</Card.Title>
                                            <Card.Text className='anchor' >
                                                Make sure your emergency kitstocked with the right items.
                                            </Card.Text>
                                        </Card.Body></a>
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
                                        <Card.Img className='tileImage' src={getVaccinated} />

                                    </Col>
                                    <Col xs={8} sm={9} md={9}>
                                    <a href="https://youtu.be/uxcb9s0dpJg" target="_blank" rel="noopener noreferrer"><Card.Body className='tileBody'>
                                            <Card.Title className='tileHeading'>Get Vaccinated</Card.Title>
                                            <Card.Text className='anchor' >
                                                COVID-19 vaccines are free and available to anyone five and older who wants one.
                                            </Card.Text>
                                        </Card.Body></a>
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