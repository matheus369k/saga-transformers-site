import Container from "../components/Container";
import Redes from "../components/layout/Redes";
import SwitchInfor from "../components/layout/SwitchInfor";

import MarkWahlberg from "../img/Atores/Mark-Wahlberg.jpeg";
import Izabella from "../img/Atores/Isabela-Moner.jpeg";
import VivianeWembley from "../img/Atores/Laura-Haddock.jpeg";
import JoshDuhamel from "../img/Atores/Capt.-William-Lennox.jpeg";
import JohnTurturro from "../img/Atores/Agent_simmons.jpeg";
import AnthonyHopkins from "../img/Atores/Anthony-Hopkins.jpeg";
import JerrodCarmichael from "../img/Atores/Jerrod-Carmichael.jpeg";
import SantiagoCabrera from "../img/Atores/Santiago-Cabrera.jpeg";
import GeneralMorshower  from "../img/Atores/General-Morshower.jpeg";
import StanleyTucci from "../img/Atores/Stanley-Tucci.jpeg";

function TransformersFive() {

    const filme = [
        { 
            "title": "Transformers: O Último Cavaleiro",
            "textSinopse": "A história se desenrola em meio a uma guerra entre humanos e Transformers, que são forçados a se esconder. Cade Yeager lidera um núcleo de resistência em um ferro-velho. Enquanto isso, Optimus Prime embarca em uma jornada pelo universo até Cybertron para entender as razões de sua destruição. O filme também apresenta o vilão colossal Unicron, uma entidade robótica que devora planetas, e marca o retorno dos Dinobots."
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
            "ator" : "Isabela Moner", 
            "personagem": "como Izabella", 
            "img": Izabella , 
            "link" : "https://pt.wikipedia.org/wiki/Isabela_Merced",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Laura Haddock", 
            "personagem": "como Viviane Wembley", 
            "img": VivianeWembley, 
            "link" : "https://pt.wikipedia.org/wiki/Laura_Haddock",
            "position" : "position_normal"
        },
        { 
            "ator" : "Josh Duhamel", 
            "personagem": "como William Lenoxx" , 
            "img": JoshDuhamel, 
            "link" : "https://pt.wikipedia.org/wiki/Josh_Duhamel",
            "position" : "position_reverser"
        },
        { 
            "ator" : "John Turturro", 
            "personagem": " como Seymour Simmons", 
            "img": JohnTurturro, 
            "link" : "https://pt.wikipedia.org/wiki/John_Turturro",
            "position" : "position_normal"
        },
    ];

    const TwoListAtores = [
        { 
            "ator" : "Anthony Hopkins", 
            "personagem": "como Sir Edmund Burton", 
            "img": AnthonyHopkins, 
            "link" : "https://pt.wikipedia.org/wiki/Anthony_Hopkins",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Jerrod Carmichael", 
            "personagem": "como Jimmy Jay", 
            "img": JerrodCarmichael, 
            "link" : "https://tfwiki.net/wiki/Jimmy_(TLK)",
            "position" : "position_normal"
        },
        { 
            "ator" : "Santiago Cabrera", 
            "personagem": "como Santos", 
            "img": SantiagoCabrera, 
            "link" : "https://pt.wikipedia.org/wiki/Santiago_Cabrera",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Glenn Morshower", 
            "personagem": "como General Morshower",  
            "img": GeneralMorshower, 
            "link" : "https://pt.wikipedia.org/wiki/Glenn_Morshower",
            "position" : "position_normal"
        },
        { 
            "ator" : "Stanley Tucci", 
            "personagem": "como Merlin", 
            "img": StanleyTucci, 
            "link" : "https://pt.wikipedia.org/wiki/Stanley_Tucci",
            "position" : "position_reverser"
        },
    ];

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_5">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse}
                        linkTrailer="https://www.youtube.com/embed/bzKbEBPsmo0?si=keQw0BKLy3EemrTa" 
                        OneListAtores={OneListAtores}
                        TwoListAtores={TwoListAtores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>

    )
}
;
export default TransformersFive;