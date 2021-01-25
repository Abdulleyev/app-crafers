import React, {Component} from 'react';
import Carousel from "../components/Carousel";
import {BrowserRouter} from "react-router-dom";
import MainSecond from "../components/MainSecond";
import MainThird from "../components/MainThird";
import Carousel2 from "../components/Carousel2";
import Footer from "../components/Footer";
import Img360 from "../components/Img360";
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <MainSecond/>
                <MainThird/>
                <Carousel2/>
                <Img360/>
                <Footer/>
            </div>
        );
    }
}

export default Home;