
import React, { Component } from "react";
import "./Login.css";
import Header from "./Header/Header";
import { FaLock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdEmail} from "react-icons/md";



class Login extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor1");
        this.state={
            email:"",
            password:"",
            dataFetched:false,
            emailCheck:false,
            emailValid:true

        }

    }
    //e is event and has many prop..therefore use the target value to get its value..compare to real life event exampe..check in inspect
    emailChanged=(e)=>{
        console.log(e);
        const uservalue=e.target.value;
        let emailCheck=false;
        let emailValidation=new RegExp("^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$");
        let emailValid;
        console.log(emailValidation.exec(uservalue));
        if (emailValidation.exec(uservalue) === null)
        {
        emailValid=false;
       
      }
      else{
      emailValid=true;
  
    }
        if(uservalue.length>5)
        emailCheck=true;
        this.setState({
            email:uservalue,
            emailCheck:emailCheck,
            emailValid:emailValid
        })
       
    }
    componentWillMount(){
        console.log('component will mount');
        // this.setState({
        //     email:"asdfg"
        // })

        
      
    }
    componentDidMount()
    {
        this.setState({
            email:""
        })
console.log('component did mount');
//one method called to get response from backend api
this.setState({
    dataFetched:true
})
    }
    componentDidUpdate(prevProps){
        console.log('component did update');
        
    }
    passwordChanged=(event)=>{
//console.log(event);
        this.setState({
            password:event.target.value
        })
    }
    onLogin=(e)=>{
console.log(e);
    }
    changepassword=(pass)=>{
console.log(pass);
this.setState({
    password:pass
})

    }
    render(){

        let loginsuccess=null;
        let dataFetch=null;
        let emailCheck=null;
        let emailError=null;
        if(!this.state.emailValid){
            emailError=(<span style={{color:'red'}}>Email is invalid</span>)
        }
        if(this.state.emailCheck)
        {
            emailCheck=(   <FiCheckCircle style={{color:'green'}}/>);
        }
        if(this.state.dataFetched)
        {
dataFetch=(<span>Data Fetched</span>)
        }
      
        return(
                      

            <div className="login">
                <Header/>


          <br/>
          <br/>
          <br/>
          <div className="loginContent">
          <span className="login-text1">Welcome to __________-</span>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
  
             <span className="loginLabels">Email address</span>
             <br/>
           
             <MdEmail style={{height:'15px',width:'15px'}}/>
             <input type="text" className="login-input" placeholder="Email"  value={this.state.email} onChange={this.emailChanged} />
          {emailCheck}
          <br/>
          {emailError}
           
<br/>
<br/>
<span className="loginLabels">Password</span>
            <br/>
            <FaLock/>
                <input type="text"  className="login-input" placeholder="Password" value={this.state.password} onChange={this.passwordChanged} />
                <FiCheckCircle/>

               
                <br/>
                <br/>
                <button type="button" className="login-button" onClick={this.onLogin}>Submit</button>
                <br/>
                </div>
{loginsuccess}
                {/* <LoginSuccess email1={this.state.email} email2={this.state.email}/> */}
            </div>
        );
    }
}
export default Login;