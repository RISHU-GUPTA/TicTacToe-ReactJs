import React from 'react';
const Resul = (props) => {
    return (
        <h2 onChange={props.tap}>Winner is {props.res}</h2>
    );
}

export default Resul;

