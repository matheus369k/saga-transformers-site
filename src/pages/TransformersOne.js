import Container from "../components/Container";
import Redes from "../components/layout/Redes";
import SwitchInfor from "../components/layout/SwitchInfor";

import SamWitwicky from "../img/Atores/Sam-Witwicky.jpeg";
import MikaelaBanes from "../img/Atores/Mikaela-Banes.jpeg";
import WilliamLennox from "../img/Atores/Capt.-William-Lennox.jpeg";
import JohnKeller from "../img/Atores/jon-voight.jpeg";
import Epps from "../img/Atores/Epps.jpeg";
import SeymourSimmons from "../img/Atores/Agent_simmons.jpeg";
import MaggieMadsen from "../img/Atores/Rachael-Taylor.jpeg";
import Glenn from "../img/Atores/Glen-Whitmann.jpeg";
import Miles from "../img/Atores/Miles.jpeg";
import BobbyBolivia from "../img/Atores/Bobby-Bolivia.jpeg";


function TransformersOne() {
    
    const filme = [
        { 
            "title": "Transformers",
            "textSinopse": "Os Transformers alienígenas gigantes que vivem na Terra camuflados sob a forma de carros, aviões e aparelhos eletrônicos, batalham por uma fonte de energia escondida em nosso planeta: são os cruéis Decepticons, determinados a dominar o Universo, contra os pacíficos Autobots. Enquanto isso, os adolescentes Sam e Mikaela vivem tranquilamente sua vida sem saber que a fonte tão cobiçada pelos alienígenas está com eles."
        }
    ];

    const OneListAtores = [
            { 
                "ator" : "Shia LaBeouf", 
                "personagem": "como Sam Witwicky", 
                "img": SamWitwicky, 
                "link" : "https://pt.wikipedia.org/wiki/Shia_LaBeouf",
                "position" : "position_normal"
            },
            { 
                "ator" : "Megan Fox", 
                "personagem": "como Mikaela Banes", 
                "img": MikaelaBanes, 
                "link" : "https://pt.wikipedia.org/wiki/Megan_Fox",
                "position" : "position_reverser"
            },
            { 
                "ator" : "Josh Duhamel", 
                "personagem": "como Capt. William Lennox", 
                "img": WilliamLennox, 
                "link" : "https://pt.wikipedia.org/wiki/Josh_Duhamel",
                "position" : "position_normal"
            },
            { 
                "ator" : "Jon Voight", 
                "personagem": "como John Keller, Secretário de Defesa" , 
                "img": JohnKeller, 
                "link" : "https://pt.wikipedia.org/wiki/Jon_Voight",
                "position" : "position_reverser"
            },
            { 
                "ator" : "Tyrese Gibson", 
                "personagem": "como Sgto. Epps", 
                "img": Epps, 
                "link" : "https://pt.wikipedia.org/wiki/Tyrese_Gibson",
                "position" : "position_normal"
            }
    ];

    const TwoListAtores = [
            { 
                "ator" : "John Turturro", 
                "personagem": "como Seymour Simmons", 
                "img": SeymourSimmons, 
                "link" : "https://pt.wikipedia.org/wiki/John_Turturro",
                "position" : "position_reverser"
            },
            { 
                "ator" : "Rachael Taylor", 
                "personagem": "como Maggie Madsen", 
                "img": MaggieMadsen, 
                "link" : "https://pt.wikipedia.org/wiki/Rachael_Taylor",
                "position" : "position_normal"
            },
            { 
                "ator" : "Anthony Anderson", 
                "personagem": "como Glenn", 
                "img": Glenn, 
                "link" : "https://pt.wikipedia.org/wiki/Anthony_Anderson",
                "position" : "position_reverser"
            },
            { 
                "ator" : "John Robinson", 
                "personagem": "como Miles", 
                "img": Miles, 
                "link" : "https://pt.wikipedia.org/wiki/John_Robinson",
                "position" : "position_normal"
            },
            { 
                "ator" : "Bernie Mac ", 
                "personagem": "como Bobby Bolivia",  
                "img": BobbyBolivia, 
                "link" : "https://pt.wikipedia.org/wiki/Bernie_Mac",
                "position" : "position_reverser"
            }
    ];

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_1">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/v8ItGrI-Ou0?" 
                        OneListAtores={OneListAtores}
                        TwoListAtores={TwoListAtores}
                        />
                    <Redes />
                </Container>))
            }
        </div>
    )
};

export default TransformersOne;
