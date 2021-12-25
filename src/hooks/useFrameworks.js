import {useState, useEffect} from 'react';

const useFrameworks = () =>{
    const [frameworks, setFrameworks] = useState([]);
    useEffect(() => {
      fetch('./frameworks.json')
        .then(res=>res.json())
        .then(data=>setFrameworks(data))
    }, [])

    return [frameworks, setFrameworks];
}

export default useFrameworks;