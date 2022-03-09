import React from "react";
import "./Search.css"
import axios from 'axios';
import Searchbar from "../../component/Searchbar/Searchbar";

class Search extends React.Component{

    onSearchSubmit(term){
     axios.get('',{

     });
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}
export default Search;