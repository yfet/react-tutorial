import React from 'react';

function Button(props) {
    const onClick = (event) => {
        props.onClick && props.onClick(event);
    }

    return (
        <button onClick={onClick}>{props.text}</button>
    )
}

export default Button;