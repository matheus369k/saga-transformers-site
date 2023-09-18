import { Link } from "react-router-dom";

import styles from './Navbar.module.css'
import Container from "../Container";

import TransformersOneImg from '../../img/transformers-tumble-1.png'
import TransformersTwoImg from '../../img/transformers-tumble-2.png'
import TransformersThreeImg from '../../img/transformers-tumble-3.png'
import TransformersFourImg from '../../img/transformers-tumble-4.png'
import TransformersFiveImg from '../../img/transformers-tumble-5.png'
import TransformersSixImg from '../../img/transformers-tumble-6.png'
import TransformersSevenImg from '../../img/transformers-tumble-7.png'

function Navbar() {
    return (
    <div className={styles.container_img_tamble}>
        <Container>
            <li>
                <Link to="/" >
                    <img src={TransformersOneImg} />
                </Link>
            </li>
            <li>
                <Link to="/transformerstwo" >
                    <img src={TransformersTwoImg} />
                </Link>
                
            </li>
            <li>
                <Link to="/transfromersthree" >
                    <img src={TransformersThreeImg} />
                </Link>
            </li>
            <li>
                <Link to="/transformersfour" >
                    <img src={TransformersFourImg} />
                </Link>
            </li>
            <li>
                <Link to="/transformersfive" >
                    <img src={TransformersFiveImg} />
                </Link>
            </li>
            <li>
                <Link to="/transformerssix" >
                    <img src={TransformersSixImg} />
                </Link>
            </li>
            <li>
                <Link to="/transformersseven" >
                    <img src={TransformersSevenImg} />
                </Link>
            </li>
        </Container>
    </div>
    )
}

export default Navbar
