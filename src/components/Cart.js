import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store =>
        store.cart.items);

    const dispatch = useDispatch();

    const clearCarts = (item) => {
        dispatch(clearCart(item))
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item, index) => {
                    return <li key={index}>{item} - <button onClick={() => {
                        clearCarts(item)
                    }}>clear -</button></li>
                })}
            </ul>
        </div>
    );
}

export default Cart;