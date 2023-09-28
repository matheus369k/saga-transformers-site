import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"

import MarkWahlberg from "../img/Atores/Mark-Wahlberg.jpeg"
import NicolaPeltz from "../img/Atores/Nicola-Peltz.jpg"
import JackReynor from "../img/Atores/Jack-Reynor.jpeg"
import StanleyTucci from "../img/Atores/Stanley-Tucci.jpeg"
import LiBingbing from "../img/Atores/Li-Bingbing.jpeg"
import KelseyGrammer from "../img/Atores/Kelsey-Grammer.jpeg"
import TitusWelliver from "../img/Atores/Titus-Welliver.jpeg"
import ThomasLennon from "../img/Atores/Thomas-Lennon.webp"
import SophiaMyles  from "../img/Atores/Sophia-Myles.jpeg"
import TJMiller from "../img/Atores/T-J-Miller.jpeg"

function TransformersFour() {
    

    const filme = [
        { 
            "title": "Transformers: A Era da Extinção",
            "textSinopse": "Após a batalha entre os Autobots e os Decepticons, que arrasou Chicago, os gigantescos robôs alienígenas desapareceram. Atualmente, eles são caçados pelos humanos, que não desejam passar por apuros novamente. Porém, enquanto a humanidade tenta se recuperar dessa terrível batalha, uma nova ameaça paira sobre a Terra."
        }
    ]

    const atores = [
        { 
            "ator1" : "Mark Wahlberg", 
            "personagem1": "como Cade Yeager", 
            "img1": MarkWahlberg, 
            "link1" : "https://pt.wikipedia.org/wiki/Mark_Wahlberg"
        },
        { 
            "ator2" : "Nicola Peltz", 
            "personagem2": "como Tessa Yeager", 
            "img2": NicolaPeltz, 
            "link2" : "https://pt.wikipedia.org/wiki/Nicola_Peltz"
        },
        { 
            "ator3" : "Jack Reynor", 
            "personagem3": "como Shane", 
            "img3": JackReynor, 
            "link3" : "https://pt.wikipedia.org/wiki/Jack_Reynor"
        },
        { 
            "ator4" : "Stanley Tucci", 
            "personagem4": "como Joshua" , 
            "img4": StanleyTucci, 
            "link4" : "https://pt.wikipedia.org/wiki/Stanley_Tucci"
        },
        { 
            "ator5" : "Li Bingbing", 
            "personagem5": " como Su Yuerning", 
            "img5": LiBingbing, 
            "link5" : "https://pt.wikipedia.org/wiki/Li_Bingbing"
        },
        { 
            "ator6" : "Kelsey Grammer", 
            "personagem6": "como Harold Attinger", 
            "img6": KelseyGrammer, 
            "link6" : "https://pt.wikipedia.org/wiki/Kelsey_Grammer"
        },
        { 
            "ator7" : "Titus Welliver", 
            "personagem7": "como Savoy", 
            "img7": TitusWelliver, 
            "link7" : "https://pt.wikipedia.org/wiki/Titus_Welliver"
        },
        { 
            "ator8" : "Thomas Lennon", 
            "personagem8": "como Chief of Staff", 
            "img8": ThomasLennon, 
            "link8" : "https://pt.wikipedia.org/wiki/Thomas_Lennon"
        },
        { 
            "ator9" : "Sophia Myles", 
            "personagem9": "como Darcy", 
            "img9": SophiaMyles, 
            "link9" : "https://pt.wikipedia.org/wiki/Sophia_Myles"
        },
        { 
            "ator10" : "T.J.Miller", 
            "personagem10": "como Lucas", 
            "img10": TJMiller, 
            "link10" : "https://pt.wikipedia.org/wiki/T._J._Miller"
        },
    ]

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_4">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/BcVlQy5aUQg?si=-qylPPaqF3zy1ujj" 
                        atores={atores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>

    )
}

export default TransformersFour