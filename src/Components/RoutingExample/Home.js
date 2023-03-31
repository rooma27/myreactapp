import {useNavigate} from "react-router-dom" 


function Home() { 
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return ( 
       <div> 
            <h1> This is the home page </h1> 
            <a className="navbar-brand" >
         <button className="btn btn-secondary" onClick ={goBack}>Back</button> 
         </a>
      </div> 
    ); 
} 
export default Home; 