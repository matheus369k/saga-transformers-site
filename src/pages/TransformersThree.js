import Container from "../components/Container";
import Redes from "../components/layout/Redes";
import SwitchInfor from "../components/layout/SwitchInfor";

import SamWitwicky from "../img/Atores/Sam-Witwicky.jpeg";
import RosieHuntingtonWhiteley from "../img/Atores/Rosie-Huntington-Whiteley.jpeg";
import WilliamLennox from "../img/Atores/Capt.-William-Lennox.jpeg";
import PatrickDempsey from "../img/Atores/Patrick-Dempsey.jpeg";
import Epps from "../img/Atores/Epps.jpeg";
import SeymourSimmons from "../img/Atores/Agent_simmons.jpeg";
import JohnMalkovich from "../img/Atores/John-Malkovich.jpeg";
import KenJeong from "../img/Atores/Ken-Jeong.jpeg";
import RonWitwicky  from "../img/Atores/Ron-Witwicky.jpeg";
import JudyWitwicky from "../img/Atores/Judy-Witwicky.jpeg";

function TransformersThree() {

    const filme = [
        { 
            "title": " Transformers: O Lado Oculto da Lua",
            "textSinopse": "Sam acaba de se formar na faculdade e agora procura emprego, mas terá que enfrentar, novamente, as ameaças de Megatron e seus aliados, numa batalha que começou na década de 1960 com a corrida à Lua. Para esse desafio, contará com o apoio de Optimus e dos outros autobots, além de sua nova namorada."
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
            "ator" : "Rosie Huntington Whiteley", 
            "personagem": "como Carly Spencer", 
            "img": RosieHuntingtonWhiteley, 
            "link" : "https://pt.wikipedia.org/wiki/Rosie_Huntington-Whiteley",
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
            "ator" : "Patrick Dempsey", 
            "personagem": "como como Dylan Gould" , 
            "img": PatrickDempsey, 
            "link" : "https://pt.wikipedia.org/wiki/Patrick_Dempsey",
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
            "personagem": "como Bruce Brazos", 
            "img": JohnMalkovich, 
            "link7" : "https://pt.wikipedia.org/wiki/John_Malkovich",
            "position" : "position_normal"
        },
        { 
            "ator" : "Ken Jeong", 
            "personagem": "como Jerry Wang", 
            "img": KenJeong, 
            "link" : "https://pt.wikipedia.org/wiki/Ken_Jeong",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Kevin Dunn", 
            "personagem": "como Ron Witwicky", 
            "img": RonWitwicky, 
            "link" : "https://en.wikipedia.org/wiki/Kevin_Dunn",
            "position" : "position_normal"
        },
        { 
            "ator" : "Julie White", 
            "personagem": "como Judy Witwicky", 
            "img": JudyWitwicky, 
            "link" : "https://pt.wikipedia.org/wiki/Julie_White",
            "position" : "position_reverser"
        }
    ];

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_3">
                    <SwitchInfor 
                            title={infor.title} 
                            textSinopse={infor.textSinopse}
                            linkTrailer="https://www.youtube.com/embed/VdENsMwf_CI?si=_UZG8uwZvAcz0zK7" 
                            OneListAtores={OneListAtores}
                            TwoListAtores={TwoListAtores}
                        />
                        <Redes />
                </Container>
            ))}
        </div>

    )
};

export default TransformersThree;