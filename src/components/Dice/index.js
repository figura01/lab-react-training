import React from 'react';
import "./dice.css";
const dicesData = [{
        id: 0,
        img: 'img/dice-empty.png'
    },
    {
        id: 1,
        img: 'img/dice1.png'
    },
    {
        id: 2,
        img: 'img/dice2.png'
    },
    {
        id: 3,
        img: 'img/dice3.png'
    },
    {
        id: 4,
        img: 'img/dice4.png'
    },
    {
        id: 5,
        img: 'img/dice5.png'
    },
    {
        id: 6,
        img: 'img/dice6.png'
    }
];
class Dice extends React.Component {

    state = {
        dices: dicesData,
        currentDice: dicesData[3].img
    };

    randomDice = (e) => {
        console.log('randomdice');

        setTimeout(() => {
            this.setState({
                currentDice: dicesData[0].img
            })
        }, 1000);

        setTimeout(() => {
            const random = Math.floor(Math.random() * (this.state.dices.length - 1 +1)) + 1;
            this.setState({
                currentDice: dicesData[random].img
            })
        }, 2000);
    }

    render() {
        return ( 
            <div className="dice">
                <img 
                    src={this.state.currentDice}
                    alt=""
                    onClick={(e) => { this.randomDice()} } 
                />
            </div>
        )
    }
}

export default Dice;