import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios'

const fetchUserDetails = (email) => {
    return axios.get(`http://localhost:5000/users/${email}`)
}

const fetchProjectDetails = (projectId) => {
    return axios.get(`http://localhost:5000/projects/${projectId}`)
}

function DependentQueries({email}) {
   const {data: user} =  useQuery(['user', email], () => fetchUserDetails(email))

   const projectId = user?.data.projectId 

   useQuery(['projects', projectId], () => fetchProjectDetails(projectId), {
    enabled: !!projectId
   })

  return (
    <div>DependentQueries</div>
  )
}

export default DependentQueries