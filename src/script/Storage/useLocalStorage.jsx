import { useState } from "react"

const useLocalStorage = (key, iniValue) =>  {
    const [storedValue, setStoredValue] = useState(() => {
        if(typeof windows === 'undefined') {
            return iniValue
        }
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : iniValue;
        } catch (error) {
            console.log(error)
            return iniValue
        }
    })

    const setValue = value => {
        try {
            setStoredValue(value)
        if(typeof windows === 'undefined') {
            localStorage.setItem(key, JSON.stringify(value))
        }
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setValue]
    
}

export default useLocalStorage