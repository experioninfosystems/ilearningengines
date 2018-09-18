import React from 'react';
import Header from './Header/Header';
import Group from './Group/Group';
import Item from './Item/Item';


const menu = (props) =>  {

    return (  
        props.options.required ?         
        (
        <ul className="sidebar-menu" data-widget="tree">
        {
        props.options.items.map((item,index) => {
            
            switch (item.type)
            {
            case ("header") :
                return <Header key={index} options={item}></Header>
            case ("group") :
                return <Group key={index} options={item}></Group>
            case ("item") :
                return <Item key={index} options={item}></Item>
            default:
                return null
            }
        }

        
        )

        }

        
        </ul>):null
        
    
    );
}


 
export default menu;