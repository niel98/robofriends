import React from 'react'
// import { robots } from './robots'
import Card from './Card'

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, idx) => {
        return (
        <Card 
        key={idx}
        name={robots[idx].name} 
        email={robots[idx].email} 
        id={robots[idx].id}/>
        )
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList