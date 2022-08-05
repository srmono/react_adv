import axios from 'axios';
import React, {useState, useEffect} from 'react';

function SuperHeros() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData ]  = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/superheroes")
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }

  return (
    <>
        <h2>SuperHeroes</h2>
        {
            data.map( hero => {
                return <div key={hero.name}> {hero.name}</div>
            })
        }
    </>
  )
}

export default SuperHeros