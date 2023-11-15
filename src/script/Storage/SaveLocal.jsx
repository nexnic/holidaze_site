import { useEffect } from "react"

function SaveLocal({LocalName, LocalData}){
    useEffect(() => {
        localStorage.setItem(LocalName, JSON.stringify(LocalData))
    })
}

export default SaveLocal