function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    let AuthButton;
// If else method

    // if (isLoggedIn) {
        
    //   return <UserGreeting />;
    // }
    // return <GuestGreeting />;

    // Conditional operator or ternary operator
    // return(
    // <h1>
    //   The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    // </h1>
    // )

    // Using Element Variables
    // if (isLoggedIn) {
    //     AuthButton = <button>Logout</button>;
    //   } else {
    //     AuthButton = <button>Login</button>;
    //   }
    // return(
    //     <div>
    //         {/* Using Logical && (Short Circuit Evaluation) */}
    // {isLoggedIn &&
    //     <h2>
    //       You are logged in.
    //     </h2>
    //   }
    //   {AuthButton}
    //   </div>
    // );
    return(
        <div>
            <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
    {(() => {
        if (isLoggedIn) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}
      </div>
    )
  }

export default Greeting;