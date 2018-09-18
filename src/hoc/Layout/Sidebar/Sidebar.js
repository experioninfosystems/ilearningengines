import React from 'react';  
import UserInfo from './UserInfo/UserInfo';
import Search from './Search/Search';
import Menu from './Menu/Menu';

const sidebar = (props) => {
    return ( 
      props.options.required ?         
      (

        <aside className="main-sidebar">
        
            <section className="sidebar">
            
                <UserInfo options = {props.options.userinfo}></UserInfo>

                 <Search options = {props.options.search}></Search>

                 <Menu options= {props.options.menu}></Menu>
                {/*
                <>
                    
                </> */}
            
            </section>
        
      </aside>

        
  
  ):null
     );
}
 
export default sidebar;