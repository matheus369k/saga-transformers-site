import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"

import MarkWahlberg from "../img/Atores/Mark-Wahlberg.jpeg"
import Izabella from "../img/Atores/Isabela-Moner.jpeg"
import VivianeWembley from "../img/Atores/Laura-Haddock.jpg"
import JoshDuhamel from "../img/Atores/Capt.-William-Lennox.webp"
import JohnTurturro from "../img/Atores/Agent_simmons.jpeg"
import AnthonyHopkins from "../img/Atores/Anthony-Hopkins.jpeg"
import JerrodCarmichael from "../img/Atores/Jerrod-Carmichael.webp"
import SantiagoCabrera from "../img/Atores/Santiago-Cabrera.webp"
import GeneralMorshower  from "../img/Atores/General-Morshower.jpeg"
import StanleyTucci from "../img/Atores/Stanley-Tucci.jpeg"

function TransformersFive() {

    const filme = [
        { 
            "title": "Transformers: O Último Cavaleiro",
            "textSinopse": "A história se desenrola em meio a uma guerra entre humanos e Transformers, que são forçados a se esconder. Cade Yeager lidera um núcleo de resistência em um ferro-velho. Enquanto isso, Optimus Prime embarca em uma jornada pelo universo até Cybertron para entender as razões de sua destruição. O filme também apresenta o vilão colossal Unicron, uma entidade robótica que devora planetas, e marca o retorno dos Dinobots."
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
            "ator2" : "Isabela Moner", 
            "personagem2": "como Izabella", 
            "img2": Izabella , 
            "link2" : "https://pt.wikipedia.org/wiki/Isabela_Merced"
        },
        { 
            "ator3" : "Laura Haddock", 
            "personagem3": "como Viviane Wembley", 
            "img3": VivianeWembley, 
            "link3" : "https://pt.wikipedia.org/wiki/Laura_Haddock"
        },
        { 
            "ator4" : "Josh Duhamel", 
            "personagem4": "como William Lenoxx" , 
            "img4": JoshDuhamel, 
            "link4" : "https://pt.wikipedia.org/wiki/Josh_Duhamel"
        },
        { 
            "ator5" : "John Turturro", 
            "personagem5": " como Seymour Simmons", 
            "img5": JohnTurturro, 
            "link5" : "https://pt.wikipedia.org/wiki/John_Turturro"
        },
        { 
            "ator6" : "Anthony Hopkins", 
            "personagem6": "como Sir Edmund Burton", 
            "img6": AnthonyHopkins, 
            "link6" : "https://pt.wikipedia.org/wiki/Anthony_Hopkins"
        },
        { 
            "ator7" : "Jerrod Carmichael", 
            "personagem7": "como Jimmy Jay", 
            "img7": JerrodCarmichael, 
            "link7" : "https://tfwiki.net/wiki/Jimmy_(TLK)"
        },
        { 
            "ator8" : "Santiago Cabrera", 
            "personagem8": "como Santos", 
            "img8": SantiagoCabrera, 
            "link8" : "https://pt.wikipedia.org/wiki/Santiago_Cabrera"
        },
        { 
            "ator9" : "Glenn Morshower", 
            "personagem9": "como General Morshower",  
            "img9": GeneralMorshower, 
            "link9" : "https://pt.wikipedia.org/wiki/Glenn_Morshower"
        },
        { 
            "ator10" : "Stanley Tucci", 
            "personagem10": "como Merlin", 
            "img10": StanleyTucci, 
            "link10" : "https://pt.wikipedia.org/wiki/Stanley_Tucci"
        },
    ]

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_5">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/bzKbEBPsmo0?si=keQw0BKLy3EemrTa" 
                        atores={atores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>

    )
}

export default TransformersFive