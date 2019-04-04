import React from 'react';
import Card from "./Card";

let PlayersHand = () => {
    let hand = [
        {number: 7, suit: 'red'},
        {number: 6, suit: 'black'},
        {number: 8, suit: 'red'},
        {number: 'Q', suit: 'black'},
    ];
    return (
        <div style={{display: 'flex'}}>
            {hand.map(card => <Card number={card.number} suit={card.suit}/>)}
        </div>
    );
};


export default PlayersHand;