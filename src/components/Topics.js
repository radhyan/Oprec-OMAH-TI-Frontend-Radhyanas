import React from 'react'
import TopicsItem from './TopicsItem'
import './topics.css'

function Topics() {
    return (
        <div className="topics">
            <h2 className="header">
                Discover Topics
            </h2>
            <div className="topicsContainer">
                <TopicsItem className='topic'
                topic='Politics'
                />
                <TopicsItem className='topic'
                topic='Science'
                />
                <TopicsItem className='topic'
                topic='Achievment'
                />
                <TopicsItem className='topic'
                topic='Event'
                />
                <TopicsItem className='topic'
                topic='Social'
                />
                <TopicsItem className='topic'
                topic='Technology'
                />
                <TopicsItem className='topic'
                topic='Academic'
                />
                <TopicsItem className='topic'
                topic='Psychology'
                />
                <TopicsItem className='topic'
                topic='News'
                />
            </div>
            <button className='seeMore'>
                See More <span className='greaterThan'>&#62;</span>
            </button>
        </div>
    )
}

export default Topics