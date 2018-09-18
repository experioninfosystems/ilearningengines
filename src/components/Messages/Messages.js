import React from 'react';
import Infowindow from '../UI/Infowindow/Infowindow';
import user1 from '../../assets/images/avatar5.png';
import user2 from '../../assets/images/avatar2.png';

const messages = (props) => {
  const image1=user1
  const image2=user2
    return ( 
      props.options.required ?         
      (

                <Infowindow menuClass="messages-menu" footer="See All Messages" header="You have 4 messages" itemCount="4" icon="fa-envelope-o" iconBG = "label-success" route="/">     
                  <li>
                    <a href="/">
                      <div className="pull-left">
                   
                        <img src={image1} className="img-circle" alt="User Image" />
                      </div>
                 
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                 
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                    <a href="/">
                      <div className="pull-left">
                   
                        <img src={image2} className="img-circle" alt="User Image" />
                      </div>
                 
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o"></i> 2 Hours</small>
                      </h4>
                 
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
          </Infowindow >):null
  

     );
}
 
export default messages;