import React from 'react';
import {Link} from '@reach/router';

const Number = props => {
    return(
        <div>
            {isNaN(props.number) ? <h1>The Word is: {props.number}</h1> : <h1>The Number is: {props.number}</h1>}
        </div>
    )
}
export default Number;