import React from "react"
import styles from "../styles/designBackground.module.css"

const DesignBackground = () => {
    return (
        <section className={styles.container}>
            <div className={styles.card_single}  style={{ backgroundImage: 'url(/6X7A8091.jpg)'}}>
                <div className={styles.escurecer}>
                <h1>Olhar  Fotográfico Presets</h1>
                <p>para todos softwares de edição</p>
                <a href="#loja_roupa">
                <button>Veja a loja</button>
                </a>
                </div>
            </div>
            <div className={styles.card_single} style={{ backgroundImage: 'url(/6X7A8398.jpg)'}}>
            <div className={styles.escurecer}>
                <h1>Tudo o que você precisa</h1>
                <p>O que todo bom editor precisa ter</p>
                <a href="#loja_roupa">
                <button>Veja a loja</button>
                </a>
            </div>
            </div>
        </section>
    )
}

export default DesignBackground