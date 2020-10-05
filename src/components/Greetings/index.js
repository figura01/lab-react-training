import React from 'react';

const Greettings = (props) => {
    console.log(props);
    const {lang, children} = props;

    const saidWelcome = (lang) => {

        switch(lang) {
            case "de": 
                return "Hallo";
            break;
            case "fr": 
                return "Bonjour";
            break;
            case "es": 
                return "Ola";
            break;
            case "en": 
                return "Welcome";
            break;
            
        }
    };

    return (
        <div className="greettings">
           {saidWelcome(lang)} {children}
        </div>
    );

};

export default Greettings;