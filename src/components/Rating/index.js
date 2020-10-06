import React from 'react';


const roudingNum = (num) => {
    return Math.round(num);
}

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

const Rating = (props) => {

    const num = props.children;

   

    return (
        <div className="rating">
            <div htmlFor="true"> {fctPutStars(num)}</div>
        </div>
    );
}

export default Rating;