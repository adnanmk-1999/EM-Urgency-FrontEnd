import React from 'react';
// import aboutUs from '../../images/aboutUs.png';
import './aboutUs.css';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutUs() {
    return (
        <>

           <div className='aboutImage'>
            
                <h1 className='h1'>About Us</h1>
                <div style={{height:6,width:100,marginLeft:"5%",background: "linear-gradient(to right, #E31836 , #E42F24)"}}>
                    
                </div>
                <h2 className='head2'>Lorem ipsum is simply dummy text <br/>of the printing</h2>
                 
            </div>

            <Row style={{ paddingLeft: "8%"}}>
                <Col>
                <h2 className='h2'>Who we are?</h2>

                    <Card style={{ width: '18rem', width: 350,marginTop:15,backgroundColor:"#F9F0F0"}}>

                        <Card.Body style={{ textAlign: "center", width: 350}}>
                            {/* <Card.Title style={{ textAlign: "center" }}><b></b></Card.Title> */}
                            <Card.Text style={{ textAlign: "left" }}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                <h2 className='h2'>What we provide?</h2>

                    <Card style={{ width: '18rem', width: 350 ,marginTop:15,backgroundColor:"#F9F0F0" }}>
                        <Card.Body style={{ textAlign: "center", width: 350 }}>
                            {/* <Card.Title style={{ textAlign: "center" }}><b>Our Courses</b></Card.Title> */}
                            <Card.Text style={{ textAlign: "left" }}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. 
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                <h2 className='h2'>Why choose us?</h2>

                    <Card style={{ width: '18rem', width: 350,marginTop:15,backgroundColor:"#F9F0F0"}}>

                        <Card.Body style={{ textAlign: "center", width: 350}}>
                            {/* <Card.Title style={{ textAlign: "center" }}><b>Our Resources</b></Card.Title> */}
                            <Card.Text style={{ textAlign: "left" }}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. 
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            {/* </div> */}
            {/* </div> */}
        </>
    );
}

export default AboutUs;