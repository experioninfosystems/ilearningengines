import React from 'react';
import Infowindow from '../UI/Infowindow/Infowindow';

const tasks = (props) => {
    return ( 
      props.options.required ?         
      (
        <Infowindow menuClass="tasks-menu" footer="See All Tasks" header="You have 9 tasks" itemCount="9" icon="fa-flag-o" iconBG ="label-danger" route="/">     
          <li>
                    <a href="/">
                      
                      <h3>
                        Design some buttons
                        <small className="pull-right">20%</small>
                      </h3>
                      
                      <div className="progress xs">
                       
                        <div className="progress-bar progress-bar-aqua" style={{width: "20%"}} role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
          </Infowindow>):null
     );
}
 
export default tasks;