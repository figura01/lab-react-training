import React from "react";

import "./card.css";

const IdCard = (props) => {

    const {
        lastName,
        firstName,
        gender,
        height,
        birth,
        picture
    } = props;

    console.log(birth);
    return (

        <div className="cardId">
            <img src={picture} alt=""/>
            <div className="card-content">
                <p><strong>First name: </strong> {firstName}</p>
                <p><strong>Last name: </strong> {lastName}</p>
                <p><strong>Height: </strong> {height}</p>
                <p><strong>Genre: </strong> {gender}</p>
                <p><strong>Birth: </strong> {birth}</p>
            </div>
        </div> 
    );  
};

export default IdCard;
