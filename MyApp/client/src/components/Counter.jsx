import { useEffect, useState } from 'react';
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    

    useEffect(() => {
        setMessage(`Updated count ${count}`);
    }, [count])

    const increment = () =>{
        console.log("Count = ",count+1)
        setCount(count+1);
    }

    const decrement = () =>{
        console.log("Count = ",count-1)
        setCount(count-1);
    }

  return (
    <div>
      <h1>Counter App</h1>
      <div className='counter'>
        <button onClick={decrement} className="btn">-</button>
        <div className='id'>{count}</div>
        <button onClick={increment} className="btn">+</button>
      </div>
      <h2>{message}</h2>
    </div>
  )
}

export default Counter
