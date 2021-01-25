import React from 'react';

const Card1 = (props) => {
    return (
        <div>
            <div className="main-third-in d-flex justify-content-center mt-5 position-relative">
                <div className="vertikal-line mr-4" ></div>
                <div className="images"><img src={props.img} alt=""/></div>
                <div className="card-title position-absolute">{props.title}</div>
            </div>
        </div>
    );
};

export default Card1;