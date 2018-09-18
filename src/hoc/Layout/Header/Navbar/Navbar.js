import React from 'react';


const navbar = (props) => {
    return (  
      props.options.required ?         
      (

      <nav className="navbar navbar-static-top" >
 
      {props.children[0]}

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

           {props.children[1]}

           {props.children[2]}

           {props.children[3]}
          
           {props.children[4]}

            {props.children[5]}
        </ul>
      </div>
    </nav>):null
    );
}
 
export default navbar;