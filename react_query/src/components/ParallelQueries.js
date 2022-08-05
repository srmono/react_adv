import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:5000/superheroes')
}
const fetchFriends = () => {
    return axios.get('http://localhost:5000/friends')
}

function ParallelQueries() {
const {data: superHeroes} =   useQuery('super-heroes', fetchSuperHeroes);
const {data: friends} =  useQuery('friends', fetchFriends);

  return (
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries