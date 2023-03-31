import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import PageNotFound from './PageNotFound';
import {useNavigate} from "react-router-dom" 
import Navigation from './Navbar';

function RoutingExample() {

    let navigate = useNavigate() ;

 return (
   <div>
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about/:name" element={<About />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
   </div>
 
  
 );
}

export default RoutingExample;