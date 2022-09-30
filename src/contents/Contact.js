import React , { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component{
    render(){
        return(
            <div className="condiv">
              <h1 className="subtopic">Contact Me</h1>
              <h3>Email : irinandris2544@gmail.com</h3>
              <h3>Phone : 092-972-2637</h3>
              <h3>Address : 52/3 Mo 5 Nongchonk bangkok 10530</h3>
              <Social />
            </div>
        );
    }
} 
export default Contact;