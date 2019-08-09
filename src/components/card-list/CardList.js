import React from 'react';

import Card from '../card/Card';

import '../card-list/card-list.css';


const CardList = props => {

    // card list will map monster from state (look in app.js) and receive as props
    // monster will pass as a props to card component

    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )


}

export default CardList;