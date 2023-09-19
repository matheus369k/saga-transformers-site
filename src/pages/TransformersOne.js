import Container from "../components/Container"
import SwitchInfor from "../components/layout/SwitchInfor"
import styles from "./PagesAll.module.css"

function TransformersOne() {
    return (
        <div>
           <Container backGroundCustom="back_groud" backGroundImgCustom="backgound_img_1">
            <SwitchInfor />
            <div className={styles.text}>
                <h1>Transformers</h1>
            <p>
                Os Transformers alienígenas gigantes que vivem na Terra camuflados sob a forma de carros, aviões e aparelhos eletrônicos, batalham por uma fonte de energia escondida em nosso planeta: são os cruéis Decepticons, determinados a dominar o Universo, contra os pacíficos Autobots. Enquanto isso, os adolescentes Sam e Mikaela vivem tranquilamente sua vida sem saber que a fonte tão cobiçada pelos alienígenas está com eles.
            </p>
            </div>

            </Container>
        </div>

    )
}

export default TransformersOne