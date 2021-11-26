import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/grGVL6C/sylhet-600x375.jpg'
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Beautiful Sylhet</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/tDpYHth/Spotted-deer-at-the-Sundarbans-a-UNESCO-World-Heritage-Site-and-a-wildlife-sanctuary-The-largest-lit.jpg'
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">The Great Sundarban</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/yf5T8JS/cox-s-bazaar-50.jpg'
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Beauty Of Cox's Bazar</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='https://i.ibb.co/brWm54b/Sajek-Valley-Tour-Package-1-600x375.jpg'
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-info">Sajek</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;