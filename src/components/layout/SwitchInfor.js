import { useState } from "react"
import styles from "./SwitchInfor.module.css"



import Loading from "./Loading"

function SwitchInfor({ linkTrailer, title, textSinopse, OneListAtores, TwoListAtores }) {
    const [inforPage, setInforPage] = useState(1)

    return (
        <div className={styles.container_all}>
            <ul className={styles.list_icons}>
                <li onClick={() => setInforPage(1)}></li>
                <li onClick={() => setInforPage(2)}></li>
                <li onClick={() => setInforPage(3)}></li>
            </ul>
            
            {inforPage === 1 &&
                
                <section className={styles.sinopse}>
                    <Loading />
                    <h1>{title}</h1>
                    <h2>Sinopse</h2>
                    <p>{textSinopse}</p>
                </section>
            }
            {inforPage === 2 &&
                <section className={styles.infor_dublador_ator}>
                    <Loading />
                    <ul>
                        { OneListAtores.map((ator) => (
                            <li key={ator.ator} className={`${styles[ator.position]}`}>
                                <img src={ator.img} alt="ator(a) img" />
                                <p>
                                    <a href={ator.link} target="_blank">
                                        {ator.ator}
                                    </a> {ator.personagem}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        { TwoListAtores.map((ator) => (
                            <li key={ator.ator} className={`${styles[ator.position]}`}>
                                <img src={ator.img} alt="ator(a) img" />
                                <p>
                                    <a href={ator.link} target="_blank">
                                        {ator.ator}
                                    </a> {ator.personagem}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            }
            {inforPage === 3 &&
                <section className={styles.midia}>
                    <div>
                        <Loading />
                        <iframe src={`${linkTrailer}&amp;controls=0`} frameBorder="0" title="Trailer"  allowFullScreen set-cookie="false" promo_shown='1' max-age="2600000" samesite="none" secure="true">Vidios Indisponivel!</iframe>
                    </div>
                </section>
            }
        </div>
    )
    
}

export default SwitchInfor
