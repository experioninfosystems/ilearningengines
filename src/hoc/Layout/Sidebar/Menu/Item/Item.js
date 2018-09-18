import React from 'react';
import {Link} from 'react-router-dom'

const item = (props) => {
    return ( 
        <li key={props.options.key} className={props.options.active?"active":""}>
            <Link to={props.options.route}>
                <i className={props.options.icon}></i> 
                <span>{props.options.caption}</span>
            </Link>
        </li>
     );
}
 
export default item;