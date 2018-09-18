import React from 'react';
import Infowindow from '../UI/Infowindow/Infowindow';

const notifications = (props) => {
    return (           
        props.options.required ?         
        (
    <Infowindow menuClass="notifications-menu" footer="See All Notifications" header="You have 4 notifications" itemCount="20" icon="fa-bell-o" iconBG = "label-warning" route="/">     
        <li>
            <a href="/">
            <i className="fa fa-users text-aqua"></i> 5 new members joined today
            </a>
        </li>
    </Infowindow>):null
);
}
 
export default notifications;