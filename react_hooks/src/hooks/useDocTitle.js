import {useEffect} from 'react'

function useDocTitle(count) {

    useEffect(() => {
        document.title = `Count is ${count}`
    }, [count])
    
}

export default useDocTitle