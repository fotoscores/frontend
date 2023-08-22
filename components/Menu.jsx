import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import styles from "../styles/Menu.module.css"
import 'tailwindcss/tailwind.css';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Sobre", url: "/about" },
    { id: 4, name: "Contato", url: "/contact" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <span className="prose">
        <ul className={styles.navigation}>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <BsChevronDown size={14} />
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
        </span>
    );
};

export default Menu;
