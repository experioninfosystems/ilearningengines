import React from 'react';

const controlToggle = (props) => {
    return (  
        props.options.required ?         
        (
        <li>
        <a href="/" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
      </li>

    ):null
    );
}
 
export default controlToggle;