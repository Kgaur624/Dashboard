import React,{ useEffect,useState} from 'react'
import "./Widgetinfo.css";
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Widgetinfo() {
  const [data,setData]=useState([]);
  const makeAPICall = async () => {
    const response = await fetch( "http://localhost:4001/getData",{
          mode: 'cors',
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
        'Accept': 'application/json'
        }   
        })
        const data1 = await response.json();
        setData(data1)
          console.log({ data1 })
    
    }
    useEffect(() => {
      makeAPICall();
    }, [])
  return (
    <div className='widget'>
        <div className="widgetItem">
            <span className="widgetTitle">Total Tickets</span>
            <div className="totalTicketsContainer">
                <span className="totalTickets">{data.total}</span>                
                </div>
        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Open Tickets</span>
            <div className="totalTicketsContainer">
                <span className="totalTickets">1380<OpenInNewIcon /></span>                
                </div>
        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Close Tickets</span>
            <div className="totalTicketsContainer">
                <span className="totalTickets">8<CloseIcon/></span>                
                </div>
        </div>
    </div>
  )
}
