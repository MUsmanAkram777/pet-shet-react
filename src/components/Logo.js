import React from 'react'
import { faCat} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo(props) {
    return (
        <div className="logo" style={{color:props.color}}>
            <span className="firstWord">Pet</span> 
            <span className="catLogo">
                <span className="logoIcon"><FontAwesomeIcon icon={faCat} /></span> 
            </span>
            <span className="secondWord">Shet</span>
        </div>
    )
}
