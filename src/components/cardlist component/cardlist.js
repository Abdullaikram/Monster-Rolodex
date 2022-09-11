import React from 'react';
import Card from '../cards component/Cards';
import '../cardlist component/cardlist-style.css'

export function Cardlist({items}) {
    return (
       <div className='card list'>
        {
            items.map((x,key)=> {
                return (
                    <Card key={key} item={x}/>

                )
            })
        }
       </div>
    )
}

export default Cardlist