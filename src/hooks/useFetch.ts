import { useState } from 'react';


export const useFetch = () => {
    const [state, setState] = useState({data: [] , loading: true})

    return state;  

}