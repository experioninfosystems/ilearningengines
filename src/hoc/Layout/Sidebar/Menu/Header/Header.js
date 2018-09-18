import React from 'react';

const header = (props) => {
    return (          
    <li key={props.options.key} className="header">
        {props.options.caption}
    </li>
);
}
 
export default header;