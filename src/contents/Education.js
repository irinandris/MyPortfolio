import  React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Information Technology And Digital Innovation" where="Mahanakorn University Of Technology" from="2020" to="Present"/>
                <Widecard title="Mathematics-Science Programme" where="Nongchonkpittayanussorn Mattayom school" from="2017" to="2020"/>
            </div>
        );
    }
}
export default Education;