import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"

import AnthonyRamos from "../img/Atores/Anthony-Ramos.jpeg"
import DominiqueFishback from "../img/Atores/Dominique-Fishback.webp"
import LunaLauren from "../img/Atores/Luna-Lauren-Velez.jpeg"
import DeanScottVasquez from "../img/Atores/Dean-Scott-Vasquez.jpeg"
import TobeNwigwe from "../img/Atores/Tobe-Nwigwe.jpeg"
import MichaelKelly from "../img/Atores/Michael-Kelly.jpeg"

function TransformersSeven() {

    const filme = [
        { 
            "title": "Transformers: O Despertar das Feras",
            "textSinopse": ". O filme apresenta os Maximals, Predacons e Terrorcons se juntando à batalha entre os Autobots e Decepticons na Terra1. Noah (Anthony Ramos), um jovem astuto do Brooklyn, e Elena (Dominique Fishback), uma ambiciosa e talentosa pesquisadora de artefatos, são arrastados para o conflito enquanto Optimus Prime e os Autobots enfrentam o terrível novo inimigo empenhado em sua destruição chamado Scourge1"
        }
    ]

    const OneListAtores = [
        { 
            "ator" : "Anthony Ramos", 
            "personagem": "como Noah Diaz", 
            "img": AnthonyRamos, 
            "link" : "https://en.wikipedia.org/wiki/Anthony_Ramos",
            "position" : "position_normal"
        },
        { 
            "ator" : "Dominique Fishback", 
            "personagem": "como Elena Wallace", 
            "img": DominiqueFishback, 
            "link" : "https://en.wikipedia.org/wiki/Dominique_Fishback",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Luna Lauren", 
            "personagem": "como Breanna Diaz", 
            "img": LunaLauren, 
            "link" : "https://en.wikipedia.org/wiki/Lauren_V%C3%A9lez",
            "position" : "position_normal"
        }
    ]

    const TwoListAtores = [
        { 
            "ator" : "Dean Scott Vasquez", 
            "personagem": "como Kris Diaz", 
            "img": DeanScottVasquez, 
            "link" : "https://wikibiography.in/dean-scott-vazquez-wiki-bio/",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Tobe Nwigwe", 
            "personagem": "como Reek", 
            "img": TobeNwigwe, 
            "link" : "https://en.wikipedia.org/wiki/Tobe_Nwigwe",
            "position" : "position_normal"
        },
        { 
            "ator" : "Michael Kelly", 
            "personagem": "como agente Burke", 
            "img": MichaelKelly, 
            "link" : "https://pt.wikipedia.org/wiki/Michael_Kelly_(ator)",
            "position" : "position_reverser"
        }
    ]


    return (
        <div>
            {filme.map((infor) => (
                <Container backGroundCustom="back_groud" backGroundImgCustom="backgound_img_7">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/AjrAbcS7eyM?si=7Yy0Y7nx9w3fBYrd" 
                        OneListAtores={OneListAtores}
                        TwoListAtores={TwoListAtores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>

    )
}

export default TransformersSeven