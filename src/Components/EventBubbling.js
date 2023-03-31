function EventBubbling() { 
  
    function outerHandle(e) { 
      
      console.log('outer') 
     

    } 
    
    function innerHandle(e) { 
      
      console.log('inner') 
      e.stopPropagation() ;
    } 
    
    return ( 
      
      <div onClick={outerHandle}> 
      {/* <div onClickCapture={outerHandle}>  */}
        <div onClick={innerHandle}> 
         {/* <div onClickCapture={innerHandle}>  */}

          Hello World 
          
        </div> 
        
      </div> 
    
    ) 
    
  } 
  
  export default EventBubbling;
  