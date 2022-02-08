import React from 'react';
import { Carousel } from 'react-bootstrap';
import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';
import './home.css';


function homePage(){
    return(
        <>
        <Carousel >
  <Carousel.Item style={{backgroundColor:'white'}}>
    <img
      className="homeImage img-fluid"
      src={home1}
      alt="First slide"
    />  
  </Carousel.Item>
  <Carousel.Item style={{backgroundColor:'white'}}>
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
        </>
    );
}

export default homePage;