import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer px-5">
            <div className="container-fluid">
                <div className="row py-4 justify-content-between d-flex">
                    <div className="col-sm-3">
                        <img src="logo1.png" width='100%' alt=""/>
                    </div>
                    <div className="col-sm-3">
                        <h5 className='text-white'> Продукция</h5>
                    </div>
                    <div className="col-sm-3">
                        <h5
                        className='text-white'> О crafers</h5>
                        <a href="#">Home</a><br/>
                        <a href="#">About</a><br/>
                        <a href="#">News</a><br/>
                        <a href="#">Products</a><br/>
                        <a href="#">Jobs</a><br/>
                        <a href="#">Contacts</a><br/>
                        <a href="#">Partner</a><br/>
                        <a href="#">Anketa eng</a><br/>
                    </div>
                    <div className="col-sm-2">
                        <h5 className='text-white'>мы в соц. сетях</h5>
                        <div className='d-flex mt-3'>
                            <img src="instagram-line-1.svg" alt=""/>
                            <img src="facebook-fill-1.svg" className='ml-2' alt=""/>
                            <img src="youtube-line.svg" alt="" className='ml-2'/>
                            <img src="telegram-fill.svg" alt="" className='ml-2'/>
                        </div>
                        <h6 className='text-white mt-3'>НАШ ТЕЛЕФОН</h6>
                        <a href='#' className='text-decoration-none text-white'>
                            <img src="phone-line.svg" alt="" className='mr-2'/>
                            +998901758990
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;