import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

import styles from "./Redes.module.css"

function Redes() {
    return (
        <ul className={styles.redes}>
            <li  className={styles.github_icon}>
                <a href="https://github.com/matheus369k" target="_blank" ><AiFillGithub /></a>
            </li>
            <li className={styles.linkedin_icon}>
                <a href="https://www.linkedin.com/in/matheus-gomes-6824a7274/" target="_blank" ><AiFillLinkedin /></a>
            </li>
        </ul>
    )
}

export default Redes