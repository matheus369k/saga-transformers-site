import { useState } from "react"
import styles from "./SwitchInfor.module.css"



import Loading from "./Loading"

function SwitchInfor({ page, linkTrailer, title, textSinopse, atores }) {
    const [inforPage, setInforPage] = useState(1)

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

                        {atores.length >= 1 &&
                        <li key={atores[0].ator1} className={styles.position_normal}>
                            <img src={atores[0].img1} alt="ator(a) img" />
                            <p>
                                <a href={atores[0].link1} target="_blank" rel="noopener">
                                    {atores[0].ator1}
                                </a> {atores[0].personagem1}
                            </p>
                        </li>}

                        {atores.length >= 2 &&
                        <li className={styles.position_reverser}>
                            <p>
                                <a href={atores[1].link2} target="_blank" rel="noopener">
                                    {atores[1].ator2}
                                </a> {atores[1].personagem2}
                            </p>
                            <img src={atores[1].img2} alt="ator(a) img" />
                        </li>}

                        {atores.length >= 3 &&
                        <li className={styles.position_normal}>
                            <img src={atores[2].img3} alt="ator(a) img" />
                            <p>
                                <a href={atores[2].link3} target="_blank" rel="noopener">
                                    {atores[2].ator3}
                                </a> {atores[2].personagem3}
                            </p>
                        </li>}

                        {atores.length >= 4 &&
                        <li className={styles.position_reverser}>
                            <p>
                                <a href={atores[3].link4} target="_blank" rel="noopener">
                                    {atores[3].ator4}
                                </a> {atores[3].personagem4}
                            </p>
                            <img src={atores[3].img4} alt="ator(a) img" />
                        </li>}

                        {atores.length >= 5 &&
                        <li className={styles.position_normal}>
                            <img src={atores[4].img5} alt="ator(a) img" />
                            <p>
                                <a href={atores[4].link5} target="_blank" rel="noopener">
                                    {atores[4].ator5}
                                </a> {atores[4].personagem5}
                            </p>
                        </li>}

                    </ul>
                    
                    <ul>

                        {atores.length >= 6 &&
                        <li className={styles.position_reverser}>
                            <p>
                                <a href={atores[5].link6} target="_blank" rel="noopener">
                                    {atores[5].ator6}
                                </a> {atores[5].personagem6}
                            </p>
                            <img src={atores[5].img6} alt="ator(a) img" />
                        </li>}

                        {atores.length >= 7 &&
                        <li className={styles.position_normal}>
                            <img src={atores[6].img7} alt="ator(a) img" />
                            <p>
                                <a href={atores[6].link7} target="_blank" rel="noopener">
                                    {atores[6].ator7}
                                </a> {atores[6].personagem7}
                            </p>
                        </li>}

                        {atores.length >= 8 &&
                        <li className={styles.position_reverser}>
                            <p>
                                <a href={atores[7].link8} target="_blank" rel="noopener">
                                    {atores[7].ator8}
                                </a> {atores[7].personagem8}
                            </p>
                            <img src={atores[7].img8} alt="ator(a) img" />
                        </li>}


                        {atores.length >= 9 &&
                        <li className={styles.position_normal}>
                            <img src={atores[8].img9} alt="ator(a) img" />
                            <p>
                                <a href={atores[8].link9} target="_blank" rel="noopener">
                                    {atores[8].ator9}
                                </a> {atores[8].personagem9}
                            </p>
                        </li>}

                        {atores.length >= 10 &&
                        <li className={styles.position_reverser}>
                            <p>
                                <a href={atores[9].link10} target="_blank" rel="noopener">
                                    {atores[9].ator10} 
                                </a> {atores[9].personagem10}
                            </p>
                            <img src={atores[9].img10} alt="ator(a) img" />
                        </li>}
                    </ul>
                </section>
            }
            { page === 1 && inforPage === 3 &&
                <section className={styles.midia}>
                    <div>
                        <Loading />
                        <iframe src={`${linkTrailer}&amp;controls=0`} frameBorder="0" title="Trailer"  allowFullScreen set-cookie="false" promo_shown='1' max-age="2600000" samesite="none" secure="true">Vidios Indisponivel!</iframe>
                    </div>
                </section>
            }
        </>
    )
    
}

export default SwitchInfor
