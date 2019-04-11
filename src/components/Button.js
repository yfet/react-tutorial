import React from 'react';
import './Button.css';


function Button(props) {
    const onClick = (event) => {
        props.onClick && props.onClick(event);
    }
    
    const typeClass = props.color ? props.color : "";

    return (
        <button className={"btn " + typeClass } onClick={onClick}>{props.text}</button>
    )
}

export default Button;