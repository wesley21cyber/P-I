import React from 'react'
import Pagina from '../components/Pagina'
import { Link } from 'react-router-dom'
import { Container, Carousel } from 'react-bootstrap'


export default () => {
  return (
      <Pagina>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R6f00001L1ZXiEAN/5e3d9930e4b0830c9670fcde.jpg&w=710&h=462"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R6f00001L1ZXiEAN/5e3d9930e4b0830c9670fcde.jpg&w=710&h=462"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R6f00001L1ZXiEAN/5e3d9930e4b0830c9670fcde.jpg&w=710&h=462"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Pagina>

  )
}