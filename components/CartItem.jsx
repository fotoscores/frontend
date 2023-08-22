import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import styles from "../styles/carintem.module.css"
const CartItem = ({ data }) => {
    const p = data.attributes;

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };

    const imageUrl = p.thumbnail.data.attributes.url

    const style = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={styles.container}>
            {/* IMAGE START */}
            <div className={styles.image} style={style}>
        
            </div>

            <div className={styles.container_info}>
                <div className={styles.texts}>
                    {/* PRODUCT TITLE */}
                    <h3> {p.name}</h3>
                    {/* PRODUCT SUBTITLE */}
                    <p>{p.subtitle}</p>
                    {/* PRODUCT PRICE */}
                </div>
            </div>

                {/* PRODUCT SUBTITLE */}
                <div className={styles.preco_delet}>
                    <RiDeleteBin6Line onClick={() => dispatch(removeFromCart({ id: data.id }))}/>
                    <span>&#x24;{p.price}</span>   </div> 
        </div>
    );
};

export default CartItem;
