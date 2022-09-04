import React from 'react'
import WriterItem from './WriterItem'
import './writer.css'

function Writer() {
    return (
        <div className="writers">
            <h2 className='header'>
                Writer of The Month
            </h2>
            <div className='writersContainer'>
            <WriterItem
            author='andyan yogawadhana'
            occupation='Computer Science Student'
            />
            <WriterItem
            author='Fidzal Adrian'
            occupation='Network Specialist'
            />
            <WriterItem
            author='Jovinca Claudia Amarissa'
            occupation='Computer Science Student'
            />
            <WriterItem
            author='Santa Sisilia Filia Dulcis'
            occupation='UI/UX Lecturer'
            />
            <WriterItem
            author='Izzeldin Rayyan Bastian'
            occupation='Fullstack Developer'
            />
            </div>
            <button className='seeMore'>
                See More <span className='greaterThan'>&#62;</span>
            </button>
        </div>
    )
}

export default Writer