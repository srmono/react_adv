import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

function MousePos() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse Event");

        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useeffect called")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("component removed");
            window.removeEventListener('mousemove', logMousePosition);
        }

    }, [])

  return (
    <div>
        Position X : {x} - Y : {y} 
    </div>
  )
}

export default MousePos