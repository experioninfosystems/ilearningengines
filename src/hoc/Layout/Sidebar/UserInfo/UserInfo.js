import React from 'react';
import user from '../../../../assets/images/avatar3.png'

const userInfo = (props) => {
    const image=user
    const name="Sample User" 

    return (  
        props.options.required ?         
        (         
        <div className="user-panel">
            <div className="pull-left image">
                <img src={image} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
                <p>{name}</p>
                <a href="/"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>):null
  );
}
 
export default userInfo;