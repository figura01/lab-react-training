import React from 'react';
import "./clicked-picture.css";

class ClickablePicture extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            img: this.props.img,
            imgClicked: this.props.imgClicked,
            checked: true
        }
    }

    swapImg = () => {

        this.setState({
            checked: !this.state.checked
        });
    };

    render(){
        return (
            <div className="clickable-picture">
                <img 
                    src={this.state.checked === true ? this.state.img: this.state.imgClicked} 
                    onClick={(evt) => {this.swapImg()}}
                    alt=""
                />
            </div>
        );
    }
};

export default ClickablePicture;