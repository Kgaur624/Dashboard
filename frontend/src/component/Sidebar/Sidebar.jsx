import "./Sidebar.css"
import React from "react";
import { Search, BugReport, LocalActivity } from "@material-ui/icons";
export default function Sidebar() 
{
    return(
        <div className="Sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active" >
                            <Search className="sidebarIcon" />Search
                            
                        </li>
                        <li className="sidebarListItem">
                          <LocalActivity className="sidebarIcon" /> Ticket
                            
                        </li>
                        <li className="sidebarListItem">
                           <BugReport className="sidebarIcon" />
                           Bug
                            
                        </li>
                        
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Charts</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem " >
                            <Search className="sidebarIcon" />Search
                            
                        </li>
                        <li className="sidebarListItem">
                          <LocalActivity className="sidebarIcon" /> Ticket
                            
                        </li>
                        <li className="sidebarListItem">
                           <BugReport className="sidebarIcon" />
                           Bug
                            
                        </li>
                        
                    </ul>
                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Status</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem " >
                            <Search className="sidebarIcon" />Search
                            
                        </li>
                        <li className="sidebarListItem">
                          <LocalActivity className="sidebarIcon" /> Ticket
                            
                        </li>
                        <li className="sidebarListItem">
                           <BugReport className="sidebarIcon" />
                           Bug
                            
                        </li>
                        
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">All Tickets</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem " >
                            <Search className="sidebarIcon" />Search
                            
                        </li>
                        <li className="sidebarListItem">
                          <LocalActivity className="sidebarIcon" /> Ticket
                            
                        </li>
                        <li className="sidebarListItem">
                           <BugReport className="sidebarIcon" />
                           Bug
                            
                        </li>
                        
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Setting</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem " >
                            <Search className="sidebarIcon" />Search
                            
                        </li>
                        <li className="sidebarListItem">
                          <LocalActivity className="sidebarIcon" /> Ticket
                            
                        </li>
                        <li className="sidebarListItem">
                           <BugReport className="sidebarIcon" />
                           Bug
                            
                        </li>
                        
                    </ul>
                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Support</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem " >
                            <Search className="sidebarIcon" />Search
                            
                        </li>
                        <li className="sidebarListItem">
                          <LocalActivity className="sidebarIcon" /> Ticket
                            
                        </li>
                        <li className="sidebarListItem">
                           <BugReport className="sidebarIcon" />
                           Bug
                            
                        </li>
                        
                    </ul>
                </div>


            </div>
        </div>
    )
}