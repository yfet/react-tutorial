import React from 'react';
import './Button.css';
import loader from '../img/loader.svg';


function Button(props) {
    const onClick = (event) => {
        props.onClick && props.onClick(event);
    }

    const typeClass = props.color ? props.color : "";

    return (
        <button className={"btn " + typeClass} onClick={onClick}>{props.loading && <img src={loader} alt="" />} {props.text}</button>
    )
}

export default Button;