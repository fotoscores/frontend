import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import styles from "../styles/Header.module.css"

import { IoMdHeartEmpty } from "react-icons/io";
import { BsFillBagPlusFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const { cartItems } = useSelector((state) => state.cart);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    

    return (
        <header
            className={styles.header}
        >
            <Wrapper className={styles.container}>
                <Link href="/">
                    <img src="/logo.svg" className={styles.image_logo} />
                </Link> {/*LOGO*/}

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                /> {/*Menu desktop*/}

                <div className={styles.container_cart_menu}>
                    {/* Icon start */}
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href="/cart">
                        <div className={styles.container_cart}>
                            <BsFillBagPlusFill className={styles.cart} />
                            {cartItems.length > 0 && (
                                <div className={styles.alert_product}>
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                    </Link>{/*Carrinho*/}
                    {/* Icon end */}

                    {/* Mobile icon start */}
                    <div className={styles.MenuMobile}>
                        {mobileMenu ? (
                            <VscChromeClose
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/*Botão de menu mobile*/}
                </div>
            </Wrapper>
            {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                    />
                )} {/*Menu mobile*/}
        </header>
    );
};

export default Header;
