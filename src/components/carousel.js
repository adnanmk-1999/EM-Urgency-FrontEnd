import React from 'react';
import {Carousel} from 'react-bootstrap';

import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import home3 from '../images/home3.jpg';
import home4 from '../images/home4.png';
import home5 from '../images/home5.jpg';


function HomeCarousel(){
    return(
        <>
            <Carousel >
                <Carousel.Item style={{ backgroundColor: 'white' }}>
                    <img
                        className="homeImage img-fluid"
                        src={home5}
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
                <Carousel.Item style={{ backgroundColor: 'white' }}>
                    <img
                        className='homeImage img-fluid '
                        src={home3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: 'white' }}>
                    <img
                        className='homeImage img-fluid '
                        src={home4}
                        alt="fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: 'white' }}>
                    <img
                        className='homeImage img-fluid '
                        src={home1}
                        alt="fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeCarousel;