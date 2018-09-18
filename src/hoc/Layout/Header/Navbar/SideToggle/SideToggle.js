import React from 'react';

const toggle = (props) => {
    return (
      props.options.required ?         
      (            
      <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
    </a>):null
      );
}
 
export default toggle;