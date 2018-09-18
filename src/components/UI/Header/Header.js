import React from 'react';
import {withRouter} from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const header = (props) => {
    return ( 
      
      
        <section className="content-header">
        
        <h1>
        {props.options.title.required?props.header:null}
          
          <small>{props.options.title.required?props.description:null}</small>
        </h1>
        {props.options.breadcrumbs.required?(<Breadcrumb path = {props.match.path}></Breadcrumb>):null}
      </section>
     );
}
 
export default withRouter(header);