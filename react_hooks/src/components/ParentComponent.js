import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {

    const [salary, setSalary] = useState(1000);
    const [age, setAge] = useState(0);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]);
  

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

  return (
    <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}> incrementAge </Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}> incrementSalary</Button>
    </div>
  )
}

export default ParentComponent