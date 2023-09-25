import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"

import SamWitwicky from "../img/Sam-Witwicky.jpg"
import MikaelaBanes from "../img/Mikaela-Banes.jpg"
import WilliamLennox from "../img/Capt.-William-Lennox.jpg"
import JohnKeller from "../img/John-Keller.jpg"
import Epps from "../img/Epps.jpg"
import SeymourSimmons from "../img/Agent_simmons.jpg"
import MaggieMadsen from "../img/Rachael-Taylor.jpg"
import Glenn from "../img/Glen-Whitmann.jpg"
import Miles from "../img/Miles.jpg"
import BobbyBolivia from "../img/Bobby-Bolivia.jpg"


function TransformersOne() {
    
    const filme = [
        { 
            "title": "Transformers",
            "textSinopse": "Os Transformers alienígenas gigantes que vivem na Terra camuflados sob a forma de carros, aviões e aparelhos eletrônicos, batalham por uma fonte de energia escondida em nosso planeta: são os cruéis Decepticons, determinados a dominar o Universo, contra os pacíficos Autobots. Enquanto isso, os adolescentes Sam e Mikaela vivem tranquilamente sua vida sem saber que a fonte tão cobiçada pelos alienígenas está com eles."
        }
    ]
    const ator = [
            { "name" : "Shia LaBeouf", "imgSamWitwicky": SamWitwicky },
            { "name" : "Megan Fox", "imgMikaelaBanes": MikaelaBanes },
            { "name" : "Josh Duhamel", "imgWilliamLennox": WilliamLennox },
            { "name" : "Jon Voight", "imgJohnKeller": JohnKeller },
            { "name" : "Tyrese Gibson", "imgEpps": Epps },
            { "name" : "John Turturro", "imgSeymourSimmons": SeymourSimmons },
            { "name" : "Rachael Taylor", "imgMaggieMadsen": MaggieMadsen },
            { "name" : "Anthony Anderson", "imgGlenn": Glenn },
            { "name" : "John Robinson", "imgMiles": Miles },
            { "name" : "Bernie Mac ", "imgBobbyBolivia": BobbyBolivia },
    ]
        
    console.log()
    return (
        <div>
            {filme.map((infor) => (
                <Container backGroundCustom="back_groud" backGroundImgCustom="backgound_img_1">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse} 
                        page={ 1 } 
                        linkTrailer="https://www.youtube.com/embed/v8ItGrI-Ou0?" />
                    <Redes />
                </Container>))
            }
        </div>
    )
}

export default TransformersOne
