import React, { Component } from "react";
import "./BalanceEnquiry.css";
import axios from "axios";

class BalanceEnquiry extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor");
        this.state={
    
            
            userDetails:this.props.userDetails,
            amount:null
         
        }
    }
    componentDidMount(){
        this.beforeBalanceEnquiry();
    }

    beforeBalanceEnquiry=()=>{
      
        axios.get("http://localhost:3010/userBalance?userEmail="+this.state.userDetails.useremail)
        .then(response => {
            console.log("Status Code : ", response.status);
            if (response.status === 200) {
              console.log("Response is::",response.data);
             this.setState({
                
                amount:response.data[0].Amount,

              
            })        
            } else {
            }
          })
          .catch(error => {
            console.log(error);
            alert(error.response.data.errorDesc)
          });
            }


            render(){
                return (
                    <div className="backgroundColor2">
                     
                       <span style={{color:'black',marginTop:'20px',marginLeft:"250px",fontSize:"50px"}}> {this.state.amount}</span>
        </div>
                )}
}
export default BalanceEnquiry;