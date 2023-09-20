import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"
import styles from "./PagesAll.module.css"

function TransformersOne() {
    return (
        <div>
           <Container backGroundCustom="back_groud" backGroundImgCustom="backgound_img_1">
            <SwitchInfor />
            <Redes />
                <div className={styles.sinopse}>
                    <h1>Transformers</h1>
                    <h2>Sinopse</h2>
                    <p>
                        Os Transformers alienígenas gigantes que vivem na Terra camuflados sob a forma de carros, aviões e aparelhos eletrônicos, batalham por uma fonte de energia escondida em nosso planeta: são os cruéis Decepticons, determinados a dominar o Universo, contra os pacíficos Autobots. Enquanto isso, os adolescentes Sam e Mikaela vivem tranquilamente sua vida sem saber que a fonte tão cobiçada pelos alienígenas está com eles.
                    </p>
                </div>
                <div className={styles.infor_dublador_ator}>
                <ul>
                    <li>Shia LaBeouf como Sam Witwicky</li>
                    <li>Megan Fox como Mikaela Banes</li>
                    <li>Josh Duhamel como Capt. William Lennox</li>
                    <li>Jon Voight como John Keller, Secretário de Defesa</li>
                    <li>Tyrese Gibson como Sgto. Epps</li>
                    <li>John Turturro como Seymour Simmons</li>
                    <li>Rachael Taylor como Maggie Madsen</li>
                    <li>Anthony Anderson como Glenn</li>
                    <li>John Robinson como Miles</li>
                    <li>Bernie Mac como Bobby Bolivia</li>
                </ul>
                </div>
            </Container>
        </div>

    )
}

export default TransformersOne