import React from 'react'

export default function Heading(props) {
    return (
        <div>
            <h2 className="headings" style={{color:props.color}}>
                <span style={{backgroundColor:props.background}}>{props.text}</span>
            </h2>
        </div>
    )
}
