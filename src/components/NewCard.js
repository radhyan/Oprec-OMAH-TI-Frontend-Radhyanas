import React from 'react'
import './newCard.css'

function NewCard(props) {
    return (
        <div className="newContainer">
            <div className="newLeft">
                <div className="newTop">
                    <img className="roundedImg" src='https://source.unsplash.com/32x32' />
                    <p className='subtitle author'>{props.author}</p>
                    <br />
                    <p className='subtitle variant'>{props.topic}</p>
                </div>
                <div className="newTitle">
                    <h2>
                        {props.title}
                    </h2>
                </div>
                <article className="newPreview">
                    {props.article}
                </article>
            </div>
            <div className="newRight">
                <img src='https://source.unsplash.com/249x192'/>
            </div>
        </div>
    )
}


export default NewCard