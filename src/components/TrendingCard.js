import React from 'react'
import './TrendingCard.css'

const TrendingCard = props => {
    return (
        <div className='card'>
            <div className='top'>
                <p className="body" style={{ textTransform: 'uppercase'}}>{props.variant}</p>
                <p className='subtitle' style={{ textTransform: 'uppercase'}}>{props.date}</p>
            </div>
            <div className='cardImg'>
                <img src='https://source.unsplash.com/414x360'/>
            </div>
            <div className='bottom'>
                <h2>
                    {props.title}
                </h2>
            </div>
        </div>
    );
};

export default TrendingCard