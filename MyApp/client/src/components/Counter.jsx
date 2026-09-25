

const Counter = () => {
    let count = 0;

    const increment = () =>{
        console.log("Count = ",count+1)
        return ++count;
    }

    const decrement = () =>{
        console.log("Count = ",count+1)
        return --count;
    }
    
  return (
    <div>
      <h1>Counter App</h1>
      <div className='counter'>
        <button onClick={decrement}>-</button>
        <div className='id'></div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter
