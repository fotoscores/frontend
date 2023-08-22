import React from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../styles/carrocel.module.css"
import ProductCard from "./ProductCard";


const RelatedProducts = ({ products }) => {
    return (
    <div className={styles.container_card_p}>     
      {products?.data?.map((product) => (
        <ProductCard key={product?.id} data={product} />
      ))}
      {products?.data?.map((product) => (
        <ProductCard key={product?.id} data={product} />
      ))}
    </div>
    );
};

export default RelatedProducts;
