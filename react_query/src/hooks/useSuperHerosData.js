import {useQuery} from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:5000/superheroes")
}

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: data => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
