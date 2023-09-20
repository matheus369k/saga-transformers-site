import SvgGithub from "../../img/github.svg"
import SvgLinkedin from "../../img/linkedin.svg"

import styles from "./Redes.module.css"

function Redes() {
    return (
        <ul className={styles.redes}>
            <li>
                <a href="https://github.com/matheus369k" target="_blank" ><img src={SvgGithub} /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/matheus-gomes-6824a7274/" target="_blank" ><img src={SvgLinkedin} /></a>
            </li>
        </ul>
    )
}

export default Redes