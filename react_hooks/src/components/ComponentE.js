import React, {useContext} from 'react'
import ComponentF from './ComponentF';
import {UserContext, AccessContext} from '../App'

function ComponentE() {
    const user = useContext(UserContext);
    const access = useContext(AccessContext);
  return (
    <div>
        {user} - {access}
        <ComponentF />
    </div>
  )
}

export default ComponentE