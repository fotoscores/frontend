import Link from "next/link";
import React from "react";
import {FaWhatsapp, FaInstagram, FaApplePay, FaCcPaypal, FaCcVisa, FaCcMastercard,FaCcAmex, FaCcStripe } from "react-icons/fa";
import { BsEnvelopeAtFill, BsLink45Deg } from "react-icons/bs"
import styles from "../styles/footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div classNameName={styles.redesocial}>
                <ul className={styles.btn_redes}>
                        <li className={`${styles.icon} ${styles.email}`}>
                            <span className={styles.tooltip}>Email</span>
                            <span><BsEnvelopeAtFill /></span>
                        </li>
                        <li className={`${styles.icon} ${styles.whatsApp}`}>
                            <span className={styles.tooltip}>WhatsApp</span>
                            <span><FaWhatsapp /></span>
                        </li>
                        <li className={`${styles.icon} ${styles.instagram}`}>
                            <span className={styles.tooltip}>Instagram</span>
                            <span><FaInstagram /></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <section className={styles.text_footer}>
                        <h3>Olhar Fotográfico</h3>
                        <p>	&#169; Olhar Fotográfico - Todos os direitos reservados. Presets e packs de edição profissionais para transformar suas criações. 
                        </p>
                        <p>Obrigado por escolher Olhar Fotográfico! Aproveite nossos presets e packs de edição para elevar o nível das suas criações. Seu sucesso criativo é nossa prioridade. Estamos aqui para ajudar, então não hesite em entrar em contato conosco caso precise de suporte. Agradecemos sua confiança e esperamos que você desfrute de uma experiência incrível em nossa loja virtual!</p>
                        <Link href={`/about#como_enviamos`}>
                            <p className={styles.envios}>COMO ENVIAMOS OS NOSSOS PRODUTOS! <BsLink45Deg /></p>
                        </Link>
                    </section>
                    <section className={styles.pagamentos}>
                        <span><FaApplePay /></span>
                        <span><FaCcPaypal /></span>
                        <span><FaCcMastercard /></span>
                        <span><FaCcVisa /></span>
                        <span><FaCcAmex /></span>
                        <span><FaCcStripe /></span>
                    </section>
                    <section className={styles.selos}>
                        <Image src="/../public/selo2.png" alt="kjkk" width={80} height={50}/>
                        <Image src="/../public/selo4.png" alt="kjkk" width={180} height={60}/>                     
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
