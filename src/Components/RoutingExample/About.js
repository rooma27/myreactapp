import {useNavigate,useLocation,useParams} from "react-router-dom" 
import React,{Component} from 'react';
import withRouter  from './withRouter';


// function About() { 
//     const navigate = useNavigate();
//     let location = useLocation();
//     let { name } = useParams();

//     console.log("Current location ",location)
//     console.log("Name ",name)

// 	const goBack = () => {
// 		navigate(-1);
//     }
//     return ( 
//        <div> 
//             <h1> This is the about page for user {name} </h1> 
//             <button className="btn btn-secondary" onClick ={goBack}>Back</button> 

//       </div> 
//     ); 
// } 
// export default About; 
 class About extends Component {
   
    render() {
        console.log(this.props);
      return(
        <div>
             <h1> This is the about page  </h1>
             <h2>{this.props.params.name}</h2>
             <h2>{this.props.location.pathname}</h2>
        </div>
      )
    }
  }


export default withRouter(About);
