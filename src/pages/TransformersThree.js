import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"

import SamWitwicky from "../img/Atores/Sam-Witwicky.jpeg"
import RosieHuntingtonWhiteley from "../img/Atores/Rosie-Huntington-Whiteley.jpeg"
import WilliamLennox from "../img/Atores/Capt.-William-Lennox.webp"
import PatrickDempsey from "../img/Atores/Patrick-Dempsey.jpeg"
import Epps from "../img/Atores/Epps.jpeg"
import SeymourSimmons from "../img/Atores/Agent_simmons.jpeg"
import JohnMalkovich from "../img/Atores/John-Malkovich.jpeg"
import KenJeong from "../img/Atores/Ken-Jeong.jpeg"
import RonWitwicky  from "../img/Atores/Ron-Witwicky.jpeg"
import JudyWitwicky from "../img/Atores/Judy-Witwicky.jpeg"

function TransformersThree() {

    const filme = [
        { 
            "title": " Transformers: O Lado Oculto da Lua",
            "textSinopse": "Sam acaba de se formar na faculdade e agora procura emprego, mas terá que enfrentar, novamente, as ameaças de Megatron e seus aliados, numa batalha que começou na década de 1960 com a corrida à Lua. Para esse desafio, contará com o apoio de Optimus e dos outros autobots, além de sua nova namorada."
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
            "ator2" : "Rosie Huntington Whiteley", 
            "personagem2": "como Carly Spencer", 
            "img2": RosieHuntingtonWhiteley, 
            "link2" : "https://pt.wikipedia.org/wiki/Rosie_Huntington-Whiteley"
        },
        { 
            "ator3" : "Josh Duhamel", 
            "personagem3": "como Capt. William Lennox", 
            "img3": WilliamLennox, 
            "link3" : "https://pt.wikipedia.org/wiki/Josh_Duhamel"
        },
        { 
            "ator4" : "Patrick Dempsey", 
            "personagem4": "como como Dylan Gould" , 
            "img4": PatrickDempsey, 
            "link4" : "https://pt.wikipedia.org/wiki/Patrick_Dempsey"
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
            "personagem7": "como Bruce Brazos", 
            "img7": JohnMalkovich, 
            "link7" : "https://pt.wikipedia.org/wiki/John_Malkovich"
        },
        { 
            "ator8" : "Ken Jeong", 
            "personagem8": "como Jerry Wang", 
            "img8": KenJeong, 
            "link8" : "https://pt.wikipedia.org/wiki/Ken_Jeong"
        },
        { 
            "ator9" : "Kevin Dunn", 
            "personagem9": "como Ron Witwicky", 
            "img9": RonWitwicky, 
            "link9" : "https://en.wikipedia.org/wiki/Kevin_Dunn"
        },
        { 
            "ator10" : "Julie White", 
            "personagem10": "como Judy Witwicky", 
            "img10": JudyWitwicky, 
            "link10" : "https://pt.wikipedia.org/wiki/Julie_White"
        },
]

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_3">
                    <SwitchInfor 
                            title={infor.title} 
                            textSinopse={infor.textSinopse}
                            linkTrailer="https://www.youtube.com/embed/VdENsMwf_CI?si=_UZG8uwZvAcz0zK7" 
                            atores={atores}
                        />
                        <Redes />
                </Container>
            ))}
        </div>

    )
}

export default TransformersThree