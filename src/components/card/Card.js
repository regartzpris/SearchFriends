import React from 'react';

import '../card/card.css'


const Card = props => {

    return (
        <div className='card-container '>

            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='' />

            <h2>{props.monster.name}</h2>
            <div className='profile'>

                <h3>Email: {props.monster.email}</h3>
                <h3>Phone: {props.monster.phone}</h3>
            </div>

        </div>

    )
}

export default Card;