import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import styles from "../styles/menumobile.module.css"

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Sobre", url: "/about" },
    { id: 4, name: "Contato", url: "/contact" },
];

const MenuMobile = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
}) => {
    return (
        <ul className={styles.container}>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul>
                                        {categories?.map(
                                            ({ attributes: c, id }) => {
                                                return (
                                                    <Link
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() => {
                                                            setShowCatMenu(
                                                                false
                                                            );
                                                            setMobileMenu(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        <li>
                                                            {c.name}
                                                            <span className="opacity-50 text-sm">
                                                                {`(${c.products.data.length})`}
                                                            </span>
                                                        </li>
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className={styles.intem_menu}>
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;
