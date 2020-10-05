import React from 'react';

const BoxColor = (props) => {
    const {r,g,b} = props;

    const rgbToHex = (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return (
        <div className="box-color" style={{ backgroundColor: rgbToHex(r,g,b)}} >
            <p>rgb({r}, {g}, {b})</p>
            <p>{rgbToHex(r,g,b)}</p>
        </div>
    );
}

export default BoxColor;