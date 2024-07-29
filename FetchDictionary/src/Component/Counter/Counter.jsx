import { useState } from "react"

function Counter(){

    const [counter , setCounter] = useState(1);
    
    function IncreaseCounter(){
        if(counter<30){
            setCounter(counter+1);
        }else{
            alert('Not add more than 30')
          }
     }
        

    function DecreaseCounter(){
       if(counter>1){
        setCounter(counter-1);
       }else{
       alert('Not minimize less than 1')
       }
    }

    return(
     <>
        <h1>Counter</h1>
        <div style={{width:'50px', height:'50px' , backgroundColor:'grey',  justifyContent:'center' , alignItems:'center' }}>
            
              <h1>{counter}</h1>

              <button onClick={IncreaseCounter} style={{color:'red'}}>Increase</button>
              <button onClick={DecreaseCounter} style={{color:'green'}}>Decreare</button>

        </div>
     </>

    )
}

export default Counter;