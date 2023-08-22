import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/productcard.module.css"
import '../tailwind.config';


const ProductCard = ({ data: { attributes: p, id } }) => {

    return (
        <div className={styles.container}>
        <Link
            href={`/product/${p.slug}`}
            className={styles.linkstyle}
        >
            <div style={{ backgroundImage: `url(${p.thumbnail.data.attributes.url})` }} className={styles.img}>

            </div>
            <div className={styles.container_text}>
                <h2 className={styles.container_text_h2}>{p.name}</h2>
                <div>
                <p className={styles.descripton}>
                {p.subtitle}
                    </p>
                </div>
                <div className={styles.prices}>
                 { /*  {p.original_price && (
                        <div>
                            <p className={styles.original_price}>
                            &#x24;{p.original_price} por
                            </p>
                            <p className={styles.total_price}>
                       &#x24;{p.price}
                    </p>
                            <p className={styles.desconto}>
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </div> 
                                )} Informações de preços*/}
                                <h2>VEJA MAIS</h2>
                    </div>
            </div>
        </Link>
        </div>
    );
};

export default ProductCard;
