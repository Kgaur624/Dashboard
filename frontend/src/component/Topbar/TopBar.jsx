import React from "react";
import  NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone';
//import SettingsIcon from '@mui/icons-material/Settings';
import "./TopBar.css"
import Settings from "@mui/icons-material/Settings";
 export default function TopBar() 
 {
     return(
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
            <div className="logo">
        <img src="./logo/logo.jpeg" alt="Khoros Dashboard" style={{width:"200px", height:"150px"}}/></div>
        </div>
        <div className="topright">  
        <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">2</span>
            </div>

            <div className="topbarIconContainer">
            <Settings />
            </div>
        
            </div>
            
      
      </div>  
      </div>  
     )
 }