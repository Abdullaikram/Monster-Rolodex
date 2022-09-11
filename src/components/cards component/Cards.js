import React from 'react';
import '../cards component/card-style.css'

function Card({item}) {
    return (
        <div className="card-container">
            <img alt='robot' src={`https://robohash.org/1 ${item.id}`} />
            <h4>{item.name}</h4>
            <h4>{item.email}</h4>

        </div>
    )
}

export default Card