import { Component } from 'react';

class Student extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name,age}= this.props;
        return(
            <div>
                <h2>{name}</h2>
                <h2>{age}</h2>
            </div>
        )
    }
}

export default Student;