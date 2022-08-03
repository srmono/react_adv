import React from 'react'

function Title() {
    console.log("Rendering title")
  return (
    <div>
        UseCallback hook
    </div>
  )
}

export default React.memo(Title)