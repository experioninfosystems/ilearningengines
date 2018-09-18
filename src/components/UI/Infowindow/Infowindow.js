import React from 'react';

const infowindow = (props) => {
    return (  

        <li className={["dropdown",props.menuClass].join(' ')}>
      
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <i className={["fa",props.icon].join(' ')}></i>
          <span className={["label",props.iconBG].join(' ')}>{props.itemCount}</span>
        </a>
        <ul className="dropdown-menu">
        <li className="header">{props.header}</li>
              <li>
              
                <ul className="menu">
        {props.children}
        </ul>
            
            </li>
            <li className="footer"><a href={props.route}>{props.footer}</a></li>
        </ul>
        </li>
    );
}
 
export default infowindow;