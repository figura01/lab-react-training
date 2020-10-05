import React from 'react';

const Random = (props) => {
    const { min, max } = props;

    const randomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    };

    return (
        <div className="random">
            <p>Random value between {min} and {max}: {randomNumber(min, max)}</p>
        </div>
    )
}

export default Random;