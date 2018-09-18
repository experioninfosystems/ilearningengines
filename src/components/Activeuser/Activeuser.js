import React from 'react';
import user from '../../assets/images/avatar3.png';

const activeuserInfo = (props) => {

  const image=user
  const name="Sample User" 
  const role="Web Developer" 
  const desc="Member since Nov. 2012" 

    return (  
      props.options.required ?         
      (
        <li className="dropdown user user-menu">
           
            <a href="/" className="dropdown-toggle" data-toggle="dropdown">
              
              <img src={image} className="user-image" alt="User Image" />
             
              <span className="hidden-xs">{name}</span>
            </a>
            <ul className="dropdown-menu">
              
              <li className="user-header">
                <img src={image} className="img-circle" alt="User Image" />

                <p>
                  {name} - {role}
                  <small>{desc}</small>
                </p>
              </li>
             
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="/">{props.options.quickLinks[0]}</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="/">{props.options.quickLinks[1]}</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="/">{props.options.quickLinks[2]}</a>
                  </div>
                </div>
                
              </li>
              
              <li className="user-footer">
                <div className="pull-left">
                  <a href="/" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="/" className="btn btn-default btn-flat" onClick={localStorage.removeItem('Auth')}>Sign out</a>
                </div>
              </li>
            </ul>
          </li>):null

    );
}
 
export default activeuserInfo;