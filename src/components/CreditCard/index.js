import React from 'react';
import "./credit-card.css";
const CreditCard = (props) => {
    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props;

    const transformSerialNum = (number) => {
        console.log(number);
        var res = '';
        for(let i=0; i<number.length; i++) {
            console.log(number[i]);
            if(i%4 === 0) {
                res += ' ';
            }
            if(i <12 ) {
                res += '*';
            } else {
              res += number[i];  
            }
        }
        return res;
    };


    return (
        <div 
            className="credit-card" 
            style={{ 
                backgroundColor: bgColor,
                color: color
            }}

        >
            <div className="card-content">
                <div className="logo-bank">
                    <img className="logo" src={type === "Visa" ? "img/visa.png" : "img/master-card.svg"} alt=""/>
                </div>
                <p className="card-number">{transformSerialNum(number)}</p>
                <p className="card-date">Expires {expirationMonth}/{expirationYear}  {bank}</p>
                <p className="card-owner">{owner}</p>
            </div>
        </div>
    );
};

export default CreditCard;