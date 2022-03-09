import Sidebar from "./component/Sidebar/Sidebar";
import TopBar from "./component/Topbar/TopBar";
import React from "react";
import "./App.css"
import Search from "./pages/Search/Search";



function App() {
  return (
    <div>
      <TopBar/>
   
      <div className="container">
        <Sidebar/>
      <Search />
 
      </div>
    </div>
  );
}

export default App;