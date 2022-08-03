import React, {useEffect, useLayoutEffect, useRef} from 'react'

function LayoutEffectTopic() {

   const divRef = useRef(null)

 useEffect( () => {
    divRef.current.value = "Hello"
 }, [])

 useLayoutEffect(() => {
   console.log(divRef.current.value)
}, [])

  return (
    <div>
      <input ref={divRef} value="INDIA" />
    </div>
  )
}

export default LayoutEffectTopic