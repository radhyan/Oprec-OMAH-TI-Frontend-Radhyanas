import React from 'react'
import './writerItem.css'

function WriterItem(props) {
return (
        <div className="writerContainer">
            <img className='roundedImg' src='https://source.unsplash.com/48x48'/>
            <div className="writerText">
                <h3 className="sub-heading" style={{textTransform: 'capitalize'}}>
                    {props.author}
                </h3>
                <p className="subtitle occupation" style={{textTransform: 'capitalize'}}>
                    {props.occupation}
                </p>
            </div>
        </div>
    )
}

export default WriterItem