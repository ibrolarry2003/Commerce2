import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-10"
          src="https://secureservercdn.net/198.71.233.86/rhq.15d.myftpupload.com/wp-content/uploads/2020/07/FP3-Bottle-Only.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-1"
          src="https://secureservercdn.net/198.71.233.86/rhq.15d.myftpupload.com/wp-content/uploads/2020/07/Shape-Bottle-Only-1-1-600x600.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
