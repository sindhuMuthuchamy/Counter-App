import { useState } from "react"
import "../index.css"

function Counter(){
    const [Count,setCount] = useState(0)

    function Increament(){
        setCount (Count +1) 
    }
    function Decreament(){
        setCount (Count-1)
    }
    function clear() {
        setCount(0);
    }

    return(
        <div className="counter">
        <h3>Increament or Decreament</h3>
        <h1>{Count}</h1> 
        <button onClick={Increament}>INCR</button>
        <button onClick={clear}>CLEAR</button>
        <button onClick={Decreament}>DEC</button>
        
        </div>
    )
}

export default Counter 