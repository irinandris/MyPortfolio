import React , { Component } from 'react';

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            'myskills': ['Programming Language: C#, PHP, JavaScript, Java, Python',
            'Database Management: MySQL, Oracle',
            'Web Programming: HTML, CSS, Bootstrap, Laravel, ReactJS',
            'Application Development: Android',
            'Project Management: PMBOK',
            'System Analysis and Design: SDLC']
        }
    }
    render(){
        return(
            <div className="condiv skills ">              
                <div className="floatl">
                    <h1 className="subtopic">Skills</h1>              
                    <ul>
                        {this.state.myskills.map((value)=>{
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>                     
            </div>
            
        );
    }
} 
export default Skills;