import { Link } from "react-router-dom"
import img from "../../img/de4u4jp-a6cef159-068c-4b0a-a409-b6d6f767367b.png"
import styles from "./SwitchInfor.module.css"

function SwitchInfor() {
    return (
        <ul className={styles.list_icons}>
            <li>
            <Link to="/"></Link>
            </li>
            <li>
            <Link to="/trailer"></Link>
            </li>
            <li>
                <Link to="/posters"></Link>
            </li>
        </ul>
    )
}

export default SwitchInfor
