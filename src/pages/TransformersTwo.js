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

    const atores = [
        { 
            "ator1" : "Shia LaBeouf", 
            "personagem1": "como Sam Witwicky", 
            "img1": SamWitwicky, 
            "link1" : "https://pt.wikipedia.org/wiki/Shia_LaBeouf"
        },
        { 
            "ator2" : "Megan Fox", 
            "personagem2": "como Mikaela Banes", 
            "img2": MikaelaBanes, 
            "link2" : "https://pt.wikipedia.org/wiki/Megan_Fox"
        },
        { 
            "ator3" : "Josh Duhamel", 
            "personagem3": "como Capt. William Lennox", 
            "img3": WilliamLennox, 
            "link3" : "https://pt.wikipedia.org/wiki/Josh_Duhamel"
        },
        { 
            "ator4" : "Ramón Rodríguez", 
            "personagem4": "como Leo Ponce" , 
            "img4": LeoPonce, 
            "link4" : "https://pt.wikipedia.org/wiki/Ram%C3%B3n_Rodr%C3%ADguez"
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
            "ator7" : "Kevin Dunn", 
            "personagem7": "como Ron Witwicky", 
            "img7": RonWitwicky, 
            "link7" : "https://en.wikipedia.org/wiki/Kevin_Dunn"
        },
        { 
            "ator8" : "Julie White", 
            "personagem8": "como Judy Witwicky", 
            "img8": JudyWitwicky, 
            "link8" : "https://pt.wikipedia.org/wiki/Julie_White"
        },
        { 
            "ator9" : "John Benjamin Hickey.", 
            "personagem9": "como Theodore Galloway", 
            "img9": TheodoreGalloway, 
            "link9" : "https://pt.wikipedia.org/wiki/John_Benjamin_Hickey"
        },
        { 
            "ator10" : "Glenn Morshower", 
            "personagem10": "como General Morshower",  
            "img10": GeneralMorshower, 
            "link10" : "https://pt.wikipedia.org/wiki/Glenn_Morshower"
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
                        atores={atores}
                    />
                    <Redes />
                </Container>
            ))}
        </div>
    )
}

export default TransformersTwo