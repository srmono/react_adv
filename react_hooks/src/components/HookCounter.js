import React, {useState, Fragment} from 'react'; //rfce

function HookCounter() {

  const initialCount = 0;
  const [count, setCount ] = useState(initialCount);

  const incrementFivetimes = () => {
    for( let i = 0; i < 5; i++){
        //setCount(count + 1);
        setCount( prevCount => prevCount + 1)
    }
  }

  return (
    <div>
        Count : {count}
        <button onClick={ () => setCount(initialCount) }> Reset </button>
        <button onClick={ () => setCount(count + 1) }> Increment </button>
        <button onClick={ () => setCount(count - 1) }> Decrement </button>
        <button onClick={incrementFivetimes}> Increment 5 </button>
    </div>
  )

}

export default HookCounter;