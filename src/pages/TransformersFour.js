import Container from "../components/Container";
import Redes from "../components/layout/Redes";
import SwitchInfor from "../components/layout/SwitchInfor";

import MarkWahlberg from "../img/Atores/Mark-Wahlberg.jpeg";
import NicolaPeltz from "../img/Atores/Nicola-Peltz.jpeg";
import JackReynor from "../img/Atores/Jack-Reynor.jpeg";
import StanleyTucci from "../img/Atores/Stanley-Tucci.jpeg";
import LiBingbing from "../img/Atores/Li-Bingbing.jpeg";
import KelseyGrammer from "../img/Atores/Kelsey-Grammer.jpeg";
import TitusWelliver from "../img/Atores/Titus-Welliver.jpeg";
import ThomasLennon from "../img/Atores/Thomas-Lennon.jpeg";
import SophiaMyles  from "../img/Atores/Sophia-Myles.jpeg";
import TJMiller from "../img/Atores/T-J-Miller.jpeg";

function TransformersFour() {
    

    const filme = [
        { 
            "title": "Transformers: A Era da Extinção",
            "textSinopse": "Após a batalha entre os Autobots e os Decepticons, que arrasou Chicago, os gigantescos robôs alienígenas desapareceram. Atualmente, eles são caçados pelos humanos, que não desejam passar por apuros novamente. Porém, enquanto a humanidade tenta se recuperar dessa terrível batalha, uma nova ameaça paira sobre a Terra."
        }
    ];

    const OneListAtores = [
        { 
            "ator" : "Mark Wahlberg", 
            "personagem": "como Cade Yeager", 
            "img": MarkWahlberg, 
            "link" : "https://pt.wikipedia.org/wiki/Mark_Wahlberg",
            "position" : "position_normal"
        },
        { 
            "ator" : "Nicola Peltz", 
            "personagem": "como Tessa Yeager", 
            "img": NicolaPeltz, 
            "link" : "https://pt.wikipedia.org/wiki/Nicola_Peltz",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Jack Reynor", 
            "personagem": "como Shane", 
            "img": JackReynor, 
            "link" : "https://pt.wikipedia.org/wiki/Jack_Reynor",
            "position" : "position_normal"
        },
        { 
            "ator" : "Stanley Tucci", 
            "personagem": "como Joshua" , 
            "img": StanleyTucci, 
            "link" : "https://pt.wikipedia.org/wiki/Stanley_Tucci",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Li Bingbing", 
            "personagem": " como Su Yuerning", 
            "img": LiBingbing, 
            "link" : "https://pt.wikipedia.org/wiki/Li_Bingbing",
            "position" : "position_normal"
        }
    ];

    const TwoListAtores = [
        { 
            "ator" : "Kelsey Grammer", 
            "personagem": "como Harold Attinger", 
            "img": KelseyGrammer, 
            "link" : "https://pt.wikipedia.org/wiki/Kelsey_Grammer",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Titus Welliver", 
            "personagem": "como Savoy", 
            "img": TitusWelliver, 
            "link" : "https://pt.wikipedia.org/wiki/Titus_Welliver",
            "position" : "position_normal"
        },
        { 
            "ator" : "Thomas Lennon", 
            "personagem": "como Chief of Staff", 
            "img": ThomasLennon, 
            "link" : "https://pt.wikipedia.org/wiki/Thomas_Lennon",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Sophia Myles", 
            "personagem": "como Darcy", 
            "img": SophiaMyles, 
            "link" : "https://pt.wikipedia.org/wiki/Sophia_Myles",
            "position" : "position_normal"
        },
        { 
            "ator" : "T.J.Miller", 
            "personagem": "como Lucas", 
            "img": TJMiller, 
            "link" : "https://pt.wikipedia.org/wiki/T._J._Miller",
            "position" : "position_reverser"
        }
    ];

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_4">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/BcVlQy5aUQg?si=-qylPPaqF3zy1ujj" 
                        OneListAtores={OneListAtores}
                        TwoListAtores={TwoListAtores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>

    )
};

export default TransformersFour;