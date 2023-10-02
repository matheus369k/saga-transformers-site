import Container from "../components/Container";
import Redes from "../components/layout/Redes";
import SwitchInfor from "../components/layout/SwitchInfor";

import HaileeSteinfeld from "../img/Atores/Hailee-Steinfeld.jpeg";
import JohnCena from "../img/Atores/John-Cena.jpeg";
import JorgeLendeborgJr from "../img/Atores/Jorge-Lendeborg-Jr.jpeg";
import JohnOrtiz from "../img/Atores/John-Ortiz.jpeg";
import JasonDrucker from "../img/Atores/Jason-Drucker.jpeg";
import PamelaAdlon from "../img/Atores/Pamela-Adlon.jpeg";
import StephenSchneide from "../img/Atores/Stephen-Schneider.jpeg";
import LenCariou from "../img/Atores/Len-Cariou.jpeg";
import GlynnTurman  from "../img/Atores/Glynn-Turman.jpeg";
import GracieDzienny from "../img/Atores/Gracie-Dzienny.jpeg";

function TransformersSix() {

    const filme = [
        { 
            "title": "Bumblebee",
            "textSinopse": "Cybertron foi derrotado. Quando Optimus Prime envia Bumblebee para defender a Terra, tem início sua jornada até se tornar um herói. Charlie Watson (HAILEE STEINFELD), uma adolescente que procura seu espaço no mundo, descobre e repara o robô, cheio de danos e disfarçado de Fusca."
        }
    ];
    

    const OneListAtores = [
        { 
            "ator" : "Hailee Steinfeld", 
            "personagem": "como Charlie Watson", 
            "img": HaileeSteinfeld, 
            "link" : "https://pt.wikipedia.org/wiki/Hailee_Steinfeld",
            "position" : "position_normal"
        },
        { 
            "ator" : "John Cena", 
            "personagem": "como Jack Burns", 
            "img": JohnCena, 
            "link" : "https://pt.wikipedia.org/wiki/John_Cena",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Jorge Lendeborg Jr", 
            "personagem": "como Memo", 
            "img": JorgeLendeborgJr, 
            "link" : "https://pt.wikipedia.org/wiki/Jorge_Lendeborg_Jr.",
            "position" : "position_normal"
        },
        { 
            "ator" : "John Ortiz", 
            "personagem": "como Dr. Powell" , 
            "img": JohnOrtiz, 
            "link" : "https://en.wikipedia.org/wiki/John_Ortiz",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Jason Drucker", 
            "personagem": " como Otis Watson", 
            "img": JasonDrucker, 
            "link" : "https://en.wikipedia.org/wiki/Jason_Drucker",
            "position" : "position_normal"
        }
    ];

    const TwoListAtores = [
        { 
            "ator" : "Pamela Adlon", 
            "personagem": "como Sally Watson", 
            "img": PamelaAdlon, 
            "link" : "https://en.wikipedia.org/wiki/Pamela_Adlon",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Stephen Schneide", 
            "personagem": "como Ron", 
            "img": StephenSchneide, 
            "link" : "https://en.wikipedia.org/wiki/Stephen_Schneider_(actor)",
            "position" : "position_normal"
        },
        { 
            "ator" : "Len Cariou", 
            "personagem": "como Hank", 
            "img": LenCariou, 
            "link" : "https://en.wikipedia.org/wiki/Len_Cariou",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Glynn Turman", 
            "personagem": "como General Whalen",  
            "img": GlynnTurman, 
            "link" : "https://en.wikipedia.org/wiki/Glynn_Turman",
            "position" : "position_normal"
        },
        { 
            "ator" : "Gracie Dzienny", 
            "personagem": "como Tina", 
            "img": GracieDzienny, 
            "link" : "https://en.wikipedia.org/wiki/Gracie_Dzienny",
            "position" : "position_reverser"
        }
    ];

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_6">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/5P_wFjzZwDo?si=6SIwcFBkPhPzAUHO" 
                        OneListAtores={OneListAtores}
                        TwoListAtores={TwoListAtores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>

    )
};

export default TransformersSix;