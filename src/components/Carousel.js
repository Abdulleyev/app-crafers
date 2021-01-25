import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="carousel-main">
                    <div className="background-img px-5 pt-5">
                <Slider {...settings}>
                    <div className="carousel-images ">
                        <div className="container-fluid">
                            <div className="row  align-items-center">
                                <div className="col-sm-5">
                                    <div className='pt-4 '>
                                    <span className='font-carousel font-family-bold text-white '>Belgium cookies "Raspberry"</span><br/>
                                    <span className='carousel-uppercase'>Butter cookies with jelly filling with raspberry flavor "Belgium cookies"</span>
                                    </div>
                                    </div>
                                <div className="col-sm-7">
                                    <img src="product.png" alt="" className='pt-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-images ">
                        <div className="container-fluid">
                            <div className="row d-flex align-items-center">
                                <div className="col-sm-5">
                                    <div className='pt-4 '>
                                        <span className='font-carousel font-family-bold text-white'>Belgium cookies "Raspberry"</span><br/>
                                        <span className='carousel-uppercase'>Butter cookies with jelly filling with raspberry flavor "Belgium cookies"</span>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <img src="product florida.png" alt="" className='pt-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-images ">
                        <div className="container-fluid">
                            <div className="row d-flex align-items-center">
                                <div className="col-sm-5">
                                    <div className='pt-4'>
                                        <span className='font-carousel font-family-bold text-white'>Belgium cookies "Raspberry"</span><br/>
                                        <span className='carousel-uppercase'>Butter cookies with jelly filling with raspberry flavor "Belgium cookies"</span>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <img src="product caramel.png" alt="" className='pt-5'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
                    </div>
            </div>
        );
    }
}