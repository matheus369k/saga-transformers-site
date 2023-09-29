import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"


import SamWitwicky from "../img/Atores/Sam-Witwicky.jpeg"
import MikaelaBanes from "../img/Atores/Mikaela-Banes.jpeg"
import WilliamLennox from "../img/Atores/Capt.-William-Lennox.webp"
import LeoPonce from "../img/Atores/Leo-Ponce.jpeg"
import Epps from "../img/Atores/Epps.jpeg"
import SeymourSimmons from "../img/Atores/Agent_simmons.jpeg"
import RonWitwicky  from "../img/Atores/Ron-Witwicky.jpeg"
import JudyWitwicky from "../img/Atores/Judy-Witwicky.jpeg"
import TheodoreGalloway from "../img/Atores/Theodore-Galloway.jpeg"
import GeneralMorshower from "../img/Atores/General-Morshower.jpeg"



function TransformersTwo() {

    const filme = [
        { 
            "title": " Transformers: A Vingança dos Derrotados",
            "textSinopse": "A Dinastia dos Primes, uma antiga raça de Transformers, usava Ceifadoras Solares para converter energia estelar em Energon. No entanto um Prime chamado “The Fallen”, construiu uma Ceifadora Solar na Terra, violando o acordo de não prejudicar mundos habitados. Como ultima alternativa os Primes se sacrificaram para esconder a Matriz da Liderança, ficando perdida na terra ate os dias atuais, sendo o objetivo de Fallen encontrar a matriz e destruir o sol, condenando a humanidade."
        }
    ]

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
            "ator" : "Ramón Rodríguez", 
            "personagem": "como Leo Ponce" , 
            "img": LeoPonce, 
            "link" : "https://pt.wikipedia.org/wiki/Ram%C3%B3n_Rodr%C3%ADguez",
            "position" : "position_reverser"
        },
        { 
            "ator" : "Tyrese Gibson", 
            "personagem": "como Sgto. Epps", 
            "img": Epps, 
            "link" : "https://pt.wikipedia.org/wiki/Tyrese_Gibson",
            "position" : "position_normal"
        }
    ]

    const TwoListAtores = [
        { 
            "ator" : "John Turturro", 
            "personagem": "como Seymour Simmons", 
            "img": SeymourSimmons, 
            "link" : "https://pt.wikipedia.org/wiki/John_Turturro",
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
        },
        { 
            "ator" : "John Benjamin Hickey.", 
            "personagem": "como Theodore Galloway", 
            "img": TheodoreGalloway, 
            "link" : "https://pt.wikipedia.org/wiki/John_Benjamin_Hickey",
            "position" : "position_normal"
        },
        { 
            "ator" : "Glenn Morshower", 
            "personagem": "como General Morshower",  
            "img": GeneralMorshower, 
            "link" : "https://pt.wikipedia.org/wiki/Glenn_Morshower",
            "position" : "position_reverser"
        },
    ]

    return (
        <div>
            {filme.map((infor) => (
                <Container key={infor.title} backGroundCustom="back_groud" backGroundImgCustom="backgound_img_2">
                    <SwitchInfor 
                        title={infor.title} 
                        textSinopse={infor.textSinopse} 
                        linkTrailer="https://www.youtube.com/embed/fnXzKwUgDhg?" 
                        OneListAtores={OneListAtores}
                        TwoListAtores={TwoListAtores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>
    )
}

export default TransformersTwo