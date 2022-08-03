import React, { useState } from 'react'
import MousePos from './MousePos';

function EventContainer() {

    const [display, setDisplay] = useState(false);
    
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display </button>
        {display && <MousePos />}
    </div>
  )
}

export default EventContainer