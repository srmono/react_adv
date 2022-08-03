import React, {useState, useEffect} from 'react'

function UpdateTitle() {
    //useEffect [componentdidmount , componentdidupdate, componentwillunmount ]

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Useeffect called")
        document.title = `you have clicked ${count} times`;
    }, [count])

  return (
    <div>
        {name}
        <input type="text" value={name} onChange={ e => setName(e.target.value)}   />
        <button onClick={ () =>setCount( count + 1 ) }> click {count} times</button>
    </div>
  )
}

export default UpdateTitle