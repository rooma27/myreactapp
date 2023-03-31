import './style.css'
// import styles from './modulestyle.module.css'; 

const Styled = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
        {/* <h1 style={myStyle}>Hello Style!</h1> */}
        {/* <h1 >Hello Style!</h1>  */}
        {/* <h1 className={styles.bigblue}>Hello Style!</h1> 
        <p>Add a little style!</p> */}
        <button>Click Me</button>
      </>
    );
  }

  export default Styled;