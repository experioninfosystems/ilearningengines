import React from 'react';  

const footer = (props) => {
    return ( 
      props.options.layout.Footer.required ?         
      (
        <footer className={["main-footer",props.options.layout.Footer.fixed?"navbar-fixed-bottom":""].join(' ')}>
    
        <div className="pull-right hidden-xs">
        <b>Version</b>{props.options.version}
        </div>
        
        <strong>Copyright &copy; {props.options.copyright} <a href={props.options.companyurl}>{props.options.companyname}</a>.</strong> All rights reserved.
      </footer>):null
     );
}
 
export default footer;