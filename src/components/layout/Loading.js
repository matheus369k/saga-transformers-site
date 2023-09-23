import { useEffect, useState } from "react"
import simbolo from "../../img/gif-simbolo-decpticom-autobots.gif"

import styles from "./Loading.module.css"
import TransformersOne from "../../pages/TransformersOne"

const Loading = () => {
    const [time, setTime] = useState(true)

    useEffect (() => {
        setTimeout(() => {
            setTime(false)
        }, 3000)
        
    })

    return (
        <div className={styles.loading_container}>
            {time === true && <img src={simbolo} />}
        </div>
    )
}


export default Loading