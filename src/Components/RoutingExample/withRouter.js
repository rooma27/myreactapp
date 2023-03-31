
import React from 'react';
import {useParams,useLocation} from "react-router-dom" 



const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
     const location = useLocation();
    return (
      <WrappedComponent
        {...props}
        params={params}
        location={location}
        // etc...
      />
    );
  };

  export default withRouter;
