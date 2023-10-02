import { Link } from "react-router-dom";

import styles from './NavbarPages.module.css';

import Container from "../Container";

import TransformersOneImg from '../../img/transformers-tumble-1.png';
import TransformersTwoImg from '../../img/transformers-tumble-2.png';
import TransformersThreeImg from '../../img/transformers-tumble-3.png';
import TransformersFourImg from '../../img/transformers-tumble-4.png';
import TransformersFiveImg from '../../img/transformers-tumble-5.png';
import TransformersSixImg from '../../img/transformers-tumble-6.png';
import TransformersSevenImg from '../../img/transformers-tumble-7.png';

function Navbar() {

    return (
        <div className={styles.container_img_tamble}>
            <Container>
                <li>
                    <Link to="/">
                        <img src={TransformersOneImg} alt="Transformers 1"/>
                    </Link>
                </li>
                <li>
                    <Link to="/transformerstwo">
                        <img src={TransformersTwoImg} alt="Transformers 2"/>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/transfromersthree">
                        <img src={TransformersThreeImg} alt="Transformers 3"/>
                    </Link>
                </li>
                <li>
                    <Link to="/transformersfour">
                        <img src={TransformersFourImg} alt="Transformers 4"/>
                    </Link>
                </li>
                <li>
                    <Link to="/transformersfive">
                        <img src={TransformersFiveImg} alt="Transformers 5"/>
                    </Link>
                </li>
                <li>
                    <Link to="/transformerssix">
                        <img src={TransformersSixImg} alt="Transformers 6"/>
                    </Link>
                </li>
                <li>
                    <Link to="/transformersseven">
                        <img src={TransformersSevenImg} alt="Transformers 7"/>
                    </Link>
                </li>
            </Container>
        </div>
    )
}

export default Navbar
