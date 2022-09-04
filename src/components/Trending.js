import React from 'react'
import TrendingCard from './TrendingCard'
import './trending.css'

function Trending() {
    return (
        <div className="trendingContainer">
            <h2 className="header">
                Trending on Press
            </h2>
            <div className="trendingCards">
                <TrendingCard 
                variant="event"
                date="3rd august 2022"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue lacus"
                />
                <TrendingCard 
                variant="article"
                date="17th august 2022"
                title="In vehicula rhoncus felis sed congue. Quisque eget"
                />
                <TrendingCard 
                variant="research"
                date="1st july 2022"
                title="Sed sit amet velit eleifend, laoreet lacus eu, porta eros. Pellentesque auctor auctoe acuse solani mur ect"
                />
                <TrendingCard 
                variant="article"
                date="17th august 2022"
                title="In vehicula rhoncus felis sed congue. Quisque eget"
                />
                <TrendingCard 
                variant="article"
                date="17th august 2022"
                title="In vehicula rhoncus felis sed congue. Quisque eget"
                />
            </div>
            <hr className="solid"></hr>
        </div>
    )
}

export default Trending