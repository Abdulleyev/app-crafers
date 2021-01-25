import React, {Component} from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            margin: 10
        };
        return (
            <div className="px-5 img">
                <h2 className='text-center text-white pt-5' > События и достижения</h2>
                <Slider {...settings}>
                            <CarouselCard img2='1.jpg' title="Salom crafers for to" text=" Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям."/>
                            <CarouselCard img2='4.jpg'  title="Salom crafers for to" text=" Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям."/>
                            <CarouselCard img2='5.jpg'  title="Salom crafers for to" text=" Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям."/>
                            <CarouselCard img2='6.png'  title="Salom crafers for to" text=" Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям."/>
                            <CarouselCard img2='7.png'  title="Salom crafers for to" text="Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям. "/>
                            <CarouselCard img2='8.jpg'  title="Salom crafers for to" text=" Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям."/>
                            <CarouselCard img2='10.png' title="Salom crafers for to" text=" Присоединившись к общенародному движению “Саҳоват ва кўмак”, компания Crafers окажет материальную поддержку на безвозмездной основе 500 малообеспеченным семьям."/>

                      </Slider>
            </div>
        );
    }
}