import React, {useState} from 'react';
import Card1 from "./Card1";

const MainThird = () => {
    const [data, setData] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0565857721385!2d69.33092500450077!3d41.32938288507519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f6aa5507fd%3A0x98aafabed0d80eed!2savtokredit.uz!5e0!3m2!1sru!2s!4v1611162277688!5m2!1sru!2s");

    const arr1 = [
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192800.43312510013!2d71.50453608993159!3d40.97038281878046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2z0J3QsNC80LDQvdCz0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1611163034527!5m2!1sru!2s",
    ];
    const arr2 = [
       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026422359!2d69.13928124047223!3d41.2825125442345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1611254196140!5m2!1sru!2s",
];
    const arr3 = [
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373.08188373521267!2d64.2093019427774!3d41.57670928942325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5825bb778fa921%3A0x8430605fecf17a1!2zNDHCsDM0JzM2LjEiTiA2NMKwMTInMzUuMiJF!5e0!3m2!1sru!2s!4v1611254354861!5m2!1sru!2s",
    ];
    const arr4 = [

            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97258.0179595542!2d71.72042117458703!3d40.3797536728408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2z0KTQtdGA0LPQsNC90LAsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1611254752563!5m2!1sru!2s",
    ];

    const arr5 = [

        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196633.9051513247!2d66.82780133561751!3d39.64060421802083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1611255064312!5m2!1sru!2s",

    ];

    return (
        <div>
            <div className="main-third py-5">
                <div className="container-fluid px-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <Card1 title=" Шоколадные конфеты" img='unnam.jpg'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 title='Печенье' img="unnamed.jpg"/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 title='Карамель' img='amilov-2.jpg'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 img='unname.jpg' title='Вафли'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 img='amilov-2.jpg' title='Мармелад'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 img='unnam.jpg' title='Маршмэллоу'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 img='amilov-2.jpg' title='Подарочные-конфеты'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 img='unnamed.jpg' title='Вафли'/>
                        </div>
                        <div className="col-sm-4">
                            <Card1 img='unnam.jpg' title='Карамель'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white iframe">

                <h3 className='text-center '>Наши магазины</h3>
                <div className="d-flex py-5 m-auto">
                    <iframe
                src={data}
                width="80%" height="500" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                tabIndex="0"/>
                    <div className='sidebar '>
                    <h5>Посетите ближайший к Вам магазин</h5>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span onClick={() => setData(arr2[0])}>Toshkent</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span onClick={() => setData(arr4[0])}>Farg'ona</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span onClick={() => setData(arr3[0])}>Navoiy</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span onClick={() => setData(arr5[0])}>Samarqand</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span onClick={() => setData(arr1[0])}>Namangan</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span>Andojon</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span>Xorazm</span></div>
                    <hr/>
                    <div className="d-flex "><img src="map-pin-2-line.svg" alt="" className='mr-2 '/><span >Urganch</span></div>
                    <hr/>
                </div>
           {/*<button type="button" onClick={() => setData(arr[0])}>davau</button>*/}
            </div>
            </div>
        </div>
    );
};

export default MainThird;