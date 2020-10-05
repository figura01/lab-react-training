import React from 'react';
import "./greetings.css";

const Greettings = (props) => {
    console.log(props);
    const {lang, children} = props;

    const saidWelcome = (lang) => {

        switch(lang) {
            case "de": 
                return "Hallo";
            case "fr": 
                return "Bonjour";
            case "es": 
                return "Ola";
            default:
                return "Welcome";
        }
    };

    return (
        <div className="greettings">
           {saidWelcome(lang)} {children}
        </div>
    );

};

export default Greettings;