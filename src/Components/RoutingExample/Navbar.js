import React from "react" 
import {useNavigate,Link} from "react-router-dom" 
  
export default function Navbar() { 
   let navigate = useNavigate() 
   return ( 
   <div> 
         {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" >
         <button className="btn btn-link" onClick ={()=>{ navigate("/about/rooma")}}> About </button>
         </a> 
         <a className="navbar-brand" >
         <button className="btn btn-link" onClick ={()=>{ navigate("/home")}}> Home </button> 
         </a>
         </nav> */}
         <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about/rooma">About</Link>
          </li>
        </ul>
      </nav>
   </div> 
);  
   }