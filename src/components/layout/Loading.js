import { useEffect, useState } from "react"
import { RiLoader3Fill } from "react-icons/ri"

import styles from "./Loading.module.css"


const Loading = (classCustomPosition) => {
    const [time, setTime] = useState(true)

    useEffect (() => {
        setTimeout(() => {
            setTime(false)
        }, 3000)
        
    }, [])
    
    return (
        <>
            {time === true && 
            <div className={styles.loading_container} >
                <RiLoader3Fill />  
            </div>}
        </>
    )
}


export default Loading