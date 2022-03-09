import React from "react";
//import {useState} from "react";
import "./Searchbar.css";

export default class Searchbar extends React.Component{

    constructor(props){
        super(props);
        this.state = { url:""};
    }
    handleSubmit = (e) =>{
        fetch("localhost:9000/getData",{}).then((data)=>{console.log(data)}).catch((error)=>{console.error(error)});
    }

    render(){
        return (
                    <div className="Searchbar">
                        <form onSubmit={this.handleSubmit}>
                    <label for="fname"> URL:</label>
                    <input type="text" id="url" name="url" value={this.state.url} onChange={(even) => this.setState({url: even.target.value})} /><br />
                    <input type="submit" value="Submit" />
                    </form>
                    </div>
                )
    }
}




// export default function Searchbar(){
//     const [url, setUrl] = useState(0);
//     handleSubmit = () =>{
//         fetch().then().catch();
//     };
//     return(
//         <div className="Searchbar">
//             <form onSubmit={handleSubmit}>
//         <label for="fname"> URL:</label>
//         <input type="text" id="url" name="url" value={url} onChange={(even) => this.setUrl({url: even.target.value})} /><br />
//         <input type="submit" value="Submit" onClick={() => setUrl(url)} />
//         </form>
//         </div>
//     )
//}