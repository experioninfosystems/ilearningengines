import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import SideToggle from './Navbar/SideToggle/SideToggle';
import Messages from '../../../components/Messages/Messages';
import Notifications from '../../../components/Notifications/Notifications';
import Tasks from '../../../components/Tasks/Tasks';
import Activeuser from '../../../components/Activeuser/Activeuser';
import ControlToggle from './Navbar/ControlToggle/ControlToggle';


const header = (props) => {


    return (    
      props.options.required ?         
      (
  <header className="main-header">
    <Logo options={props.options.logo}/>
    <Navbar options={props.options.navbar}>
      <SideToggle options={props.options.navbar.sidetoggle}/>
      <Messages options={props.options.navbar.messages}/>
      <Notifications options={props.options.navbar.notifications}/>
      <Tasks options={props.options.navbar.tasks}/>
      <Activeuser options={props.options.navbar.activeuser}/>
      <ControlToggle options={props.options.navbar.controltoggle}/>
    </Navbar>
  </header>):null
  );
}
 
export default header;