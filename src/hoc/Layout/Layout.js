import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Controlbar from './Controlbar/Controlbar';



const layout = (props) => {

    const layoutsettings = props.options.layout
    


    return ( 
        
            
                
            
            <div className="wrapper">
            <Header options={layoutsettings.Header}/>
            <Sidebar options={layoutsettings.Sidebar}/>
            <Content options={layoutsettings.Content}>
              {props.children}
            </Content>
            <Footer options={props.options} />
            <Controlbar options={layoutsettings.Controlbar}/></div>
            
            
           

        
     );
}
 
export default layout;