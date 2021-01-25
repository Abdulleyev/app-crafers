import React, {Component} from 'react';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
class MainSecond extends Component {
    render() {
        return (
            <div className='main-second '>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <img src="stall.jpg" alt="" />
                            <div className="youtube-video ">
                           <div> <ReactPlayer controls
                                         width='400px'
                                         height='350px'
                                         url='href="https://www.youtube.com/embed/XnkOTIbA8XY'/>
                           </div>
                            </div>
                        </div>
                        <div className="col-sm-6 pl-5 about">
                            <h2 className='my-5'><b>About us</b></h2>
                            <span >
                                CRAFERS is a high-tech, modern factory that manufactures flour and sugar confectionery. The factory is equipped with modern high-tech automated equipment for the
                                production of confectionery products that allow the production of high-quality and tasty products.
                            </span>
                            <br/>
                            <button type='button' className='btn  mt-5'><Link to="/about" className='justify-content-center text-white  align-items-center d-flex text-decoration-none'>MORE DETALIS</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSecond;