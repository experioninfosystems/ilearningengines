import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import AppSettings from './AppSettings.json'
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';

import Configurator from './components/Pages/Configurator/Configurator';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import PageNotfound from './components/Pages/PageNotfound/PageNotfound';
import Login from './components/Pages/Login/Login';
import Search from './components/Pages/Search/Search';

/* const AsyncConfigurator = AsyncComponent(() => {
  return import('../../../components/Pages/Configurator/Configurator');
})
const AsyncDashboard = AsyncComponent(() => {
  return import('../../../components/Pages/Dashboard/Dashboard');
})
const AsyncPageNotfound = AsyncComponent(() => {
  return import('../../../components/Pages/PageNotfound/PageNotfound');
}) */

class App extends Component {

  render() {
    const AppSttings = AppSettings;
    const AppSttingsPlain = AppSttings
    const Auth = localStorage.getItem('Auth');

    

    if (Auth){
      if (AppSttings.site.collapse ===true)
        document.body.classList.add("sidebar-collapse")
      if (AppSttings.site.collapsetype ==="mini")
        document.body.classList.add("sidebar-mini")
      if (AppSttings.site.box ===true)
        document.body.classList.add("layout-boxed")
      if (AppSttings.site.fixed === true)
        document.body.classList.add("fixed")
      document.body.classList.add("skin-" + AppSttings.site.skin) 
    }
    else{
        document.body.classList.add("fixed")
        document.body.classList.add("sidebar-collapse")
        document.body.classList.add("skin-" + "blue") 
        AppSttingsPlain.layout.Sidebar.required = false;
        AppSttingsPlain.layout.Controlbar.required = false;
        AppSttingsPlain.layout.Footer.fixed = true;
        AppSttingsPlain.layout.Header.navbar.sidetoggle = false;
        AppSttingsPlain.layout.Header.navbar.messages = false;
        AppSttingsPlain.layout.Header.navbar.notifications = false;
        AppSttingsPlain.layout.Header.navbar.tasks = false;
        AppSttingsPlain.layout.Header.navbar.activeuser = false;
        AppSttingsPlain.layout.Header.navbar.controltoggle = false;
        AppSttingsPlain.layout.Content.header.required = false;
    }

    return (
      <BrowserRouter basename={AppSttings.site.baseurl}>
        {Auth?(
        <Layout options={AppSttings}>
          <Switch>
            <Route path="/Configurator" exact component={Configurator}></Route>
            <Route path="/Search" exact component={Search}></Route>
            <Route path="/" exact component={Dashboard}></Route>
            <Route component={PageNotfound}></Route>
          </Switch>        
        </Layout>):
                 
            
          
           (<Layout options={AppSttingsPlain}>
            <Route path="/" exact component={Login}></Route>
          </Layout>)
          
        }
      </BrowserRouter>
    );
  }
}

export default App;
