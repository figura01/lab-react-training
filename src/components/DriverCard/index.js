import React from 'react';
import "./driver.css";


const DriverCard = (props) => {
    const {name, rating, img, car} = props;

    const roudingNum = (num) => {
        return Math.round(num);
    };

    const fctPutStars = (num) => {
        const newValue = roudingNum(num);
        let tpl = '';
        for(let i=0; i<5; i++) {
            if(i< newValue) {
                tpl += `★`;
            } else {
                tpl += `☆`;
            }
        }

        return tpl;
    };
    
    return (
        <div className="driver-card">
            <img className="driver-img" src={img} alt={name} />
            <div className="driver-content">
                <h3>{name}</h3>
                <p className="driver-stars">{fctPutStars(rating)}</p>
                <p>{car.model} - {car.licensePlae}</p>
            </div>
        </div>
    )
};

export default DriverCard;