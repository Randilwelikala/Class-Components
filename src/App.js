import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            name:"Ruwan",
            age:25
        };

    }
    
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit 123 <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                    <p>{this.state.name}</p>
                    <p>{this.state.age}</p>
                    
                </header>
            </div>

        )

    }
}
export default App;