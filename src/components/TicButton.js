import React from 'react';
import './tic.css';
const TicButton = (props) => {
    return (
        <React.Fragment>  
<td>
<button onClick={()=>{
    props.print(props.row,props.col);
}}>{props.msg}</button>
</td>
    </React.Fragment>    
    );
}

export default TicButton;