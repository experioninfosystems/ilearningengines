import React from 'react';


const Content = (props) => {
    return ( 
      props.options.required ?         
      (
        <div className="content-wrapper">
        
          {props.children}
       </div>
    ):null
     );
}
 
export default Content;