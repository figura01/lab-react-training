import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            imgs: props.imgs,
            currentIndex: 0,
        };
    }

    increment = () => {
        console.log('increment');

        const copy = {...this.state};
        console.log(copy);

        if(copy.currentIndex === this.state.imgs.length -1){
            copy.currentIndex = 0;
        } else {
            copy.currentIndex += 1;
        }

        this.setState({
            currentIndex: copy.currentIndex
        });

    }

    decrement = () => {
        console.log('decrement');

        const copy = {...this.state};
        console.log(copy);

        if(copy.currentIndex === 0){
            copy.currentIndex = this.state.imgs.length -1;
        } else {
            copy.currentIndex -= 1;
        }

        this.setState({
            currentIndex: copy.currentIndex
        });
    }

    render() {
        return ( 
            <div className="carousel">
                <button
                    onClick={(e) => this.decrement()}
                >
                    Left
                </button>
                <img 
                    src={this.state.imgs[this.state.currentIndex]}
                    alt=""
                />
                <button
                    onClick={(e) => this.increment()}
                >
                    Right
                </button>
            </div>
        );
    };
};

export default Carousel;