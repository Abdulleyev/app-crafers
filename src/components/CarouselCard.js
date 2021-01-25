import React from 'react';

const CarouselCard = (props) => {
    return (

        <div className="mr-1 px-3 py-5 carousel-card ">
            <img src={props.img2} className='w-100' alt=""/>
            <div className='bg-white px-4'>
            <h4 className=' pt-3'>{props.title}</h4>
            <p className='py-3 m-0'>{props.text}</p>
            </div>
            <div className='d-flex  justify-content-around bg-white pb-3 '>
                <button type='button' className='btn  px-3'>Читать далее</button>
                <img src="f.svg" alt=""/>
                <img src="instagram-line.svg" alt=""/>
                <p className="p-0 m-0 pt-2">0.30.4.2020</p>
            </div>
        </div>
    );
};

export default CarouselCard;