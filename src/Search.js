import {Component} from 'react';

class Search extends Component{

    constructor(props){
        super(props);
    }

    onSearch = (event)=>{
        console.log(event.target.value)
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.onSearch}/>
            </div>
        )
    }
}

export default Search;