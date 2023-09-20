import { useState } from "react"
import styles from "./SwitchInfor.module.css"

function SwitchInfor() {
    return ( 
        <ul className={styles.list_icons}>
            <li onClick={() => console.log(1)}></li>
            <li onClick={() => console.log(2)}></li>
            <li onClick={() => console.log(3)}></li>
        </ul>
    )
}

export default SwitchInfor
