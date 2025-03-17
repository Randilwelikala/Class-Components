import {Component} from 'react';

class Search extends Component{

    constructor(props){
        super(props);
        this.state ={
            text:""
        }
    }

    onSearch = (event)=>{
        console.log(event.target.value);
        this.setState({text:event.target.value})
        this.props.onSearch(event);
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.onSearch}/>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Search;