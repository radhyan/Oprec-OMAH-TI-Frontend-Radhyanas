import React from 'react'
import './Link.css'


function Link(props) {
    return (
    <div className="linkContainer">
        <a className="subtitle link">
            {props.link}
        </a>
    </div>
    )
}

export default Link