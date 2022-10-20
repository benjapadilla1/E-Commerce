import React from 'react'
import cartu from "../../assets/cartucheraamayra.jpg"
import valija from "../../assets/valijaamayra.jpg"
import necy from "../../assets/necy.png"
import Carousel from 'react-bootstrap/Carousel'
const CarouselHome = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item className='carouselItem'>
                    <img
                        className="text-center"
                        style={{ width: "300px" }}
                        src={cartu}
                        alt=""
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselItem'>
                    <img
                        className="text-center"
                        style={{ width: "300px" }}
                        src={valija}
                        alt=""
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselItem '>
                    <img
                        className="text-center"
                        style={{ width: "300px" }}
                        src={necy}
                        alt=""
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselHome