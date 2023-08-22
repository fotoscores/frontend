import React from "react";
import styles from "../styles/designdividido.module.css"
import AntesDepois from "./AntesDepois"

const DesignDividido = () => {
    return (
        <section className={styles.container}>
            <div className={styles.card_single}></div>
            <div className={styles.card_single}>
                <AntesDepois />
                <a href="http://localhost:3000/product/produto-2">
                <button>Veja a loja</button> 
                </a>
            </div>
        </section>
    )
}

export default DesignDividido
