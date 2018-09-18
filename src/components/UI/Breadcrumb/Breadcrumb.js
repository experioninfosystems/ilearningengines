import React from 'react';
import {Link} from 'react-router-dom'
const breadcrumb = (props) => {
    const fragments = props.path.split("/")
    return ( 
       
        <ol className="breadcrumb">
        {console.log(fragments)}
        <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>

        {fragments.map((fragment,index) =>  {
            return (fragment!==""?(
                index === fragments.length -1?
            <li className="active">{fragment}</li> :
            <li> <Link to={"/" + fragment}>{fragment}</Link></li>
            
            ):null)
        })}
        
      </ol>
     );
}
 
export default breadcrumb;