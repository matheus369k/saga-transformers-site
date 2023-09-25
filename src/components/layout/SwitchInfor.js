import { useEffect, useState } from "react"
import styles from "./SwitchInfor.module.css"

import SamWitwicky from "../../img/Sam-Witwicky.jpg"
import MikaelaBanes from "../../img/Mikaela-Banes.jpg"
import WilliamLennox from "../../img/Capt.-William-Lennox.jpg"
import JohnKeller from "../../img/John-Keller.jpg"
import Epps from "../../img/Epps.jpg"
import SeymourSimmons from "../../img/Agent_simmons.jpg"
import MaggieMadsen from "../../img/Rachael-Taylor.jpg"
import Glenn from "../../img/Glen-Whitmann.jpg"
import Miles from "../../img/Miles.jpg"
import BobbyBolivia from "../../img/Bobby-Bolivia.jpg"

import Loading from "./Loading"

function SwitchInfor({ page, linkTrailer, title, textSinopse }) {
    const [inforPage, setInforPage] = useState(1)

    console.log(title)

    return ( 
        <>
            <ul className={styles.list_icons}>
                <li onClick={() => setInforPage(1)}></li>
                <li onClick={() => setInforPage(2)}></li>
                <li onClick={() => setInforPage(3)}></li>
            </ul>
            
            {page === 1 && inforPage === 1 &&
                
                <section className={styles.sinopse}>
                    <Loading />
                    <h1>{title}</h1>
                    <h2>Sinopse</h2>
                    <p>{textSinopse}</p>
                </section>
            }
            {page === 1 && inforPage === 2 &&
                <section className={styles.infor_dublador_ator}>
                <Loading />
                    <ul>
                        <li className={styles.position_normal}>
                            <img src={SamWitwicky} />
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Shia_LaBeouf" target="blank">
                                    Shia LaBeouf
                                </a> como Sam Witwicky
                            </p>
                        </li>
                        <li className={styles.position_reverser}>
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Megan_Fox" target="blank">
                                    Megan Fox
                                </a> como Mikaela Banes
                            </p>
                            <img src={MikaelaBanes} />
                        </li>
                        <li className={styles.position_normal}>
                            <img src={WilliamLennox} />
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Josh_Duhamel" target="blank">
                                    Josh Duhamel
                                </a> como Capt. William Lennox
                            </p>
                        </li>
                        <li className={styles.position_reverser}>
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Jon_Voight" target="blank">
                                    Jon Voight
                                </a> como John Keller, Secretário de Defesa
                            </p>
                            <img src={JohnKeller} />
                        </li>
                        <li className={styles.position_normal}>
                            <img src={Epps} />
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Tyrese_Gibson" target="blank">
                                    Tyrese Gibson
                                </a> como Sgto. Epps
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li className={styles.position_reverser}>
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/John_Turturro" target="blank">
                                    John Turturro
                                </a> como Seymour Simmons
                            </p>
                            <img src={SeymourSimmons} />
                        </li>
                        <li className={styles.position_normal}>
                            <img src={MaggieMadsen} />
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Rachael_Taylor" target="blank">
                                    Rachael Taylor
                                </a> como Maggie Madsen
                            </p>
                        </li>
                        <li className={styles.position_reverser}>
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Anthony_Anderson" target="blank">
                                    Anthony Anderson
                                </a> como Glenn
                            </p>
                            <img src={Glenn} />
                        </li>
                        <li className={styles.position_normal}>
                            <img src={Miles} />
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/John_Robinson" target="blank">
                                    John Robinson
                                </a> como Miles
                            </p>
                        </li>
                        <li className={styles.position_reverser}>
                            <p>
                                <a href="https://pt.wikipedia.org/wiki/Bernie_Mac" target="blank">
                                    Bernie Mac 
                                </a> como Bobby Bolivia
                            </p>
                            <img src={BobbyBolivia} />
                        </li>
                    </ul>
                </section>
            }
            { page === 1 && inforPage === 3 &&
                <section className={styles.midia}>
                    <div>
                        <Loading />
                        <iframe src={`${linkTrailer}&amp;controls=0`} frameBorder="0"  allowFullScreen set-cookie="false" promo_shown='1' max-age="2600000" samesite="none" secure="true">Vidios Indisponivel!</iframe>
                    </div>
                </section>
            }
        </>
    )
    
}

export default SwitchInfor
