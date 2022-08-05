import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import { useSuperHerosData } from '../hooks/useSuperHerosData'
import { Link } from 'react-router-dom'


function RQSuperHeros() {

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data)
  }

  const onError = (error) => {
    console.log("Perform side effect after encounering error", error)
  }

  const {isLoading, data, isError, error, isFetching, refetch} = useSuperHerosData(onSuccess, onError);

//  const {isLoading, data, isError, error, isFetching, refetch} = useQuery(
//     'super-heroes', 
//     fetchSuperHeroes,
//     {
//       // cacheTime: 5000,
//       //staleTime: 0,
//       // refetchOnMount: 'always',
//       // refetchOnWindowFocus: 'always'
//       // refetchInterval: 2000,
//       // refetchIntervalInBackground: true
//       // enabled:false
//       onSuccess,
//       onError,
//       select: (data) => {
//         const superHeroNames= data.data.map( hero => hero.name)
//         return superHeroNames;
//       }
//     }
//     )

 console.log({isLoading, isFetching})

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2> {error.message} </h2>
  }
  return (
    <>
        <h2>RQ Super Heroes</h2>
        <button onClick={refetch}>Fetch Heroes</button>
        {/* {
            data.map(heroName => {
              return <div>{heroName}</div>
            })
        } */}

        {
            data?.data.map( hero => {
                return <div key={hero.id}> 
                  <Link to={`/rq-super-heroes/${hero.id}`}> {hero.name} </Link>
                </div>
            })
        }
    </>
  )
}

export default RQSuperHeros