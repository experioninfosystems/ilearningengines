import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
import pageContainer from '../../../hoc/PageContainer/PageContainer';
import connection from '../../../connection'
 

class login extends Component {

  loginHandler = () => {
  
    connection.post('api/v0.1/member_login'
    ,{memberLogin: "demo@demo.com", memberPwd: "demo4iLe@rning!"}).then(
      (res) => {
        localStorage.setItem('Auth',true)
        console.log(this.props.history)
        this.props.history.push("/")
      }
    ).catch((err) => {console.log(err)})
  }
  render(){
    return (  

        <div className="login-box" >
  {/* <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div> */}

  <div className="login-box-body" style={{backgroundColor:'#367fa9'}}>
    <p className="login-box-msg">Sign in to start your session</p>

    <div  >
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email"/>
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password"/>
        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox"/> Remember Me
            </label>
          </div>
        </div>
       
        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.loginHandler}>Sign In</button>
        </div>
      
      </div>
    </div>

    <div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>
    

    <a href="#">I forgot my password</a><br/>
    <a href="register.html" className="text-center">Register a new membership</a>

  </div>

</div>

    );
  }
}
 
export default pageContainer(login,"","");