import React from 'react';

const Img360 = () => {
    return (
        <div>
            <div className="img360 p-5">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-sm-3 text-white ">
                            <h4 className="d-flex"> Контакты</h4>
                            <div className='d-flex mt-3 justify-content-start '>
                                <img src="phone-line-1.svg" alt="" className='mr-3'/>
                                <h5>+998901758990</h5>
                            </div>
                            <h6 className='mt-4'>E-MAIL</h6>
                            <div className="d-flex mt-3 justify-content-start">
                                <img src="message-2-line.svg" alt="" className='mr-3 '/>
                                <h5>Info@crafers.uz</h5>
                            </div>
                            <h6 className='mt-4'> Адрес:</h6>
                            <div className="d-flex mt-3 align-items-sm-start justify-content-start">
                                <img src="map-pin-2-line.svg" alt="" className='mr-3 pt-1'/>
                                <h5>г. Ташкент, ул. Катта <br/> Дархон, дом 9</h5>
                            </div>
                            <button type="button" className='btn'> <span className='text-white'>Показать на карте</span></button>
                            <button type="button" className='btn'> <span className='text-white'> Напишите нам</span></button>
                        </div>
                        <div className="col-sm-9" >
                            <h2 className='text-center text-white pt-3'> Виртуальный тур по фирменному магазину</h2>
                            <img src="product.png"alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Img360;