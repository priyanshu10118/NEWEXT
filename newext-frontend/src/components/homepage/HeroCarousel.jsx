import React from 'react'
import { Carousel } from 'react-bootstrap';

export default function HeroCarousel() {
  return (
    <div> 
        <Carousel fade className='carousel-mask'>
            {/* {dataCarousel.map((element, index) => {
                <Carousel.Item interval={2000} key={index}>
                    <img
                        src={element.img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                        <a href="">Read more...</a>
                    </Carousel.Caption>
                </Carousel.Item>
            })} */}
        <Carousel.Item interval={3000}>
            <img
            src="https://i.postimg.cc/W4ZfgZHX/Getty-Images-900481092.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Pelé: 1940 - 2022</h3>
            <p>Edson Arantes do Nascimento, or Pelé as the football world would worship him, wrote history with his FIFA World Cup accomplishments.</p>
            <a href="https://www.linkedin.com/in/pratayroy/">Read more...</a>
            </Carousel.Caption>
            <div className="carousel-gradient-container"></div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            src="https://i.postimg.cc/pVYb3GbY/img2.jpg"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="https://www.linkedin.com/in/pratayroy/">Read more...</a>
            </Carousel.Caption>
            <div className="carousel-gradient-container"></div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            src="https://i.postimg.cc/T1czmwqH/img5.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <a href="https://www.linkedin.com/in/pratayroy/">Read more...</a>
            </Carousel.Caption>
            <div className="carousel-gradient-container"></div>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}