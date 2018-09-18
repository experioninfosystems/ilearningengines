import React from 'react';
import pageContainer from '../../../hoc/PageContainer/PageContainer';
import Aux from '../../../hoc/Auxi/Auxi';
const confHandler = (pm) =>{
    reset();
    if (pm===1)
    {   
        document.body.classList.add("fixed")
    }
    if (pm===2)
    {   
        document.body.classList.add("fixed")
        document.body.classList.add("sidebar-collapse")
        
    }
    if (pm===3)
    {   
        document.body.classList.add("fixed")
        document.body.classList.add("sidebar-mini")
        document.body.classList.add("sidebar-collapse")
        
    }
    if (pm===4)
    {   
        document.body.classList.add("layout-boxed")
    }
    if (pm===5)
    {   
        document.body.classList.add("layout-boxed")
        document.body.classList.add("sidebar-collapse")
        
    }
    if (pm===6)
    {   
        document.body.classList.add("layout-boxed")
        document.body.classList.add("sidebar-mini")
        document.body.classList.add("sidebar-collapse")
        
    }

}

const reset = () =>{

    document.body.classList.remove("fixed")
    document.body.classList.remove("layout-boxed")
    document.body.classList.remove("sidebar-mini")
    document.body.classList.remove("sidebar-collapse")
    
}

const fixedHandler = (event) => {

    if (event.target.checked===true)
        document.body.classList.add("fixed")
    else    
        document.body.classList.remove("fixed")
}

const boxedHandler = (event) => {

    if (event.target.checked===true)
        document.body.classList.add("layout-boxed")
    else    
        document.body.classList.remove("layout-boxed")
}

const iniHandler = (event) => {

    if (event.target.checked===true)
        document.body.classList.add("sidebar-mini")
    else    {
        document.body.classList.remove("sidebar-mini")
        
    }
}

const collHandler = (event) => {

    if (event.target.checked===true)
        document.body.classList.add("sidebar-collapse")
    else    
        document.body.classList.remove("sidebar-collapse")
}

const skinHandler = (event) => {

    document.body.classList.remove("skin-blue")
    document.body.classList.remove("skin-black")
    document.body.classList.remove("skin-purple")
    document.body.classList.remove("skin-green")
    document.body.classList.remove("skin-red")
    document.body.classList.remove("skin-yellow")
    document.body.classList.remove("skin-blue-light")
    document.body.classList.remove("skin-black-light")
    document.body.classList.remove("skin-purple-light")
    document.body.classList.remove("skin-green-light")
    document.body.classList.remove("skin-red-light")
    document.body.classList.remove("skin-yellow-light")

    document.body.classList.add(event.target.value)

}

const fixedfooterHandler = (pm) => {
    let footer = document.getElementsByTagName("footer")
    let checkbox = document.getElementById("ffooter")
    if (checkbox.checked===true)
        footer[0].classList.add("navbar-fixed-bottom")
    else
        footer[0].classList.remove("navbar-fixed-bottom")
}

const configurator = (props) => {
    return (  
        <Aux>
           
        {/* Fixed <input type = "checkbox" onClick ={fixedHandler}/>
        Boxed <input type = "checkbox" onClick ={boxedHandler}/>
        Mini Sidebar <input type = "checkbox" onClick ={iniHandler}/>
        Collapsed SideBar <input type = "checkbox" onClick ={collHandler}/><br/> */}

        <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">Skins</h3>
  </div>
  <div className="panel-body">
  <div className="row">

    <div className="col-md-6 bg-blue" style={{borderRadius:'10px 0px 0px 0px'}}>

        <input type="radio" name="gender" value="skin-blue" onClick ={skinHandler}/> Blue<br/>
        <input type="radio" name="gender" value="skin-blue-light" onClick ={skinHandler}/> Blue-Light<br/>
        

    </div>
    <div className="col-md-6 bg-purple" style={{borderRadius:'00px 10px 0px 0px'}}>

<input type="radio" name="gender" value="skin-purple" onClick ={skinHandler}/> Purple<br/>
<input type="radio" name="gender" value="skin-purple-light" onClick ={skinHandler}/> Purple-Light<br/>


</div>

    <div className="col-md-6 bg-black">

<input type="radio" name="gender" value="skin-black" onClick ={skinHandler}/> Black<br/>
<input type="radio" name="gender" value="skin-black-light" onClick ={skinHandler}/> Black-Light<br/>


</div>

    <div className="col-md-6 bg-yellow">

<input type="radio" name="gender" value="skin-yellow" onClick ={skinHandler}/> Yellow<br/>
<input type="radio" name="gender" value="skin-yellow-light" onClick ={skinHandler}/> Yellow-Light<br/>


</div>
<div className="col-md-6 bg-red" style={{borderRadius:'00px 00px 0px 10px'}}>

<input type="radio" name="gender" value="skin-red" onClick ={skinHandler}/> Red<br/>
<input type="radio" name="gender" value="skin-red-light" onClick ={skinHandler}/> Red-Light<br/>


</div>
<div className="col-md-6 bg-green" style={{borderRadius:'0px 0px 10px 0px'}}>

<input type="radio" name="gender" value="skin-green" onClick ={skinHandler}/> Green<br/>
<input type="radio" name="gender" value="skin-green-light" onClick ={skinHandler}/> Green-Light<br/>


</div>

    
    

  </div>
      </div>
</div>

<div className="panel panel-default">

  <div className="panel-heading"><b>Valid Configurations</b></div>
  <div className="panel-body">
  Fixed Footer <input id="ffooter" type = "checkbox" onClick ={() => fixedfooterHandler(this.checked)}/>
  </div>

 
  <ul className="list-group">
    <li className="list-group-item" style={{cursor:'pointer'}} onClick={() => confHandler(1)}>Fixed Header &amp; Sidebar</li>
    <li className="list-group-item" style={{cursor:'pointer'}} onClick={() => confHandler(2)}>Fixed Header &amp; Sidebar,Sidebar Collapsed</li>
    <li className="list-group-item" style={{cursor:'pointer'}} onClick={() => confHandler(3)}>Fixed Header &amp; Sidebar,Sidebar Minimally Collapsed</li>
    <li className="list-group-item" style={{cursor:'pointer'}} onClick={() => confHandler(4)}>Boxed</li>
    <li className="list-group-item" style={{cursor:'pointer'}} onClick={() => confHandler(5)}>Boxed,Sidebar Collapsed</li>
    <li className="list-group-item" style={{cursor:'pointer'}} onClick={() => confHandler(6)}>Boxed,Sidebar Minimally Collapsed</li>

  
  </ul>
</div>
        
</Aux>
        

    );
}


 
export default pageContainer(configurator,"Configurator","Valid Layout Configurations");