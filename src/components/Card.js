import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFacedUp: false
        };
    }

    flip = () =>
        this.setState({
            isFacedUp: !this.state.isFacedUp
        });

    render() {
        return (
            this.state.isFacedUp ?
                <div className="card" style={{color: this.props.suit}}>
                    <div>
                        {this.props.number}
                    </div>
                    <div className="card-number">
                        {this.props.number}
                    </div>
                </div> :
                <div className="card" style={{color: this.props.suit, background: 'blue'}}
                     onClick={this.flip}/>
        );
    }
}

export default Card;
