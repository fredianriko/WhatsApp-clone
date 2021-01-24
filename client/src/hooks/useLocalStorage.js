import {useEffect, useState} from 'react'

const prefix = "whatsapp-clone-"

export default function useLocalStorage(key, initialValue) {
    const prefixedkey = prefix + key;
    const [value, setValue] = useState(() => {
        const jsonvalue = localStorage.getItem(prefixedkey)
        if(jsonvalue != null) return JSON.parse(jsonvalue)
        if(typeof initialValue === 'function') {
            return initialValue();
        }else{
            return initialValue
        }
    })    

    useEffect(() => {
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    }, [prefixedkey, value])
    
    return [value, setValue]
}
