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

    const atores = [
            { 
                "ator1" : "Shia LaBeouf", 
                "personagem1": "como Sam Witwicky", 
                "img1": SamWitwicky, 
                "link1" : "https://pt.wikipedia.org/wiki/Shia_LaBeouf"
            },
            { 
                "ator2" : "Megan Fox", 
                "personagem2": "como Mikaela Banes", 
                "img2": MikaelaBanes, 
                "link2" : "https://pt.wikipedia.org/wiki/Megan_Fox"
            },
            { 
                "ator3" : "Josh Duhamel", 
                "personagem3": "como Capt. William Lennox", 
                "img3": WilliamLennox, 
                "link3" : "https://pt.wikipedia.org/wiki/Josh_Duhamel"
            },
            { 
                "ator4" : "Jon Voight", 
                "personagem4": "como John Keller, Secretário de Defesa" , 
                "img4": JohnKeller, 
                "link4" : "https://pt.wikipedia.org/wiki/Jon_Voight"
            },
            { 
                "ator5" : "Tyrese Gibson", 
                "personagem5": "como Sgto. Epps", 
                "img5": Epps, 
                "link5" : "https://pt.wikipedia.org/wiki/Tyrese_Gibson"
            },
            { 
                "ator6" : "John Turturro", 
                "personagem6": "como Seymour Simmons", 
                "img6": SeymourSimmons, 
                "link6" : "https://pt.wikipedia.org/wiki/John_Turturro"
            },
            { 
                "ator7" : "Rachael Taylor", 
                "personagem7": "como Maggie Madsen", 
                "img7": MaggieMadsen, 
                "link7" : "https://pt.wikipedia.org/wiki/Rachael_Taylor"
            },
            { 
                "ator8" : "Anthony Anderson", 
                "personagem8": "como Glenn", 
                "img8": Glenn, 
                "link8" : "https://pt.wikipedia.org/wiki/Anthony_Anderson"
            },
            { 
                "ator9" : "John Robinson", 
                "personagem9": "como Miles", 
                "img9": Miles, 
                "link9" : "https://pt.wikipedia.org/wiki/John_Robinson"
            },
            { 
                "ator10" : "Bernie Mac ", 
                "personagem10": "como Bobby Bolivia",  
                "img10": BobbyBolivia, 
                "link10" : "https://pt.wikipedia.org/wiki/Bernie_Mac"
            },
    ]

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_1">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse} 
                        page={ 1 } 
                        linkTrailer="https://www.youtube.com/embed/v8ItGrI-Ou0?" 
                        atores={atores}
                        />
                    <Redes />
                </Container>))
            }
        </div>
    )
}

export default TransformersOne
