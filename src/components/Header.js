import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Logo = (
    <img type="" src="https://i.pinimg.com/736x/11/1a/21/111a218fa1455232512f17ee86d98eff.jpg" className="logo h-10 w-100  px-2" alt="random" />
)

const HeaderComponent = () => {
    const [isLogged, setIsLogged] = useState(true);
    const { user } = useContext(userContext);
    const cartItems = useSelector(store =>
        store.cart.items);
    console.log(cartItems);
    return (
        <div className="header-card sticky top-0 p-10 border-1 border-solid border-gray-300 bg-white rounded-lg justify-between items-center px-20 my-0 mx-20 mb-20 shadow-md flex">
            <h1>{Logo}</h1>
            <div className="nav-items">
                <ul className="list-none p-0 flex">
                    <Link to="/"><li className="mr-15 cursor-pointer">Home</li></Link>
                    <Link to="/about"><li className="mr-15 cursor-pointer">About</li></Link>
                    <Link to="/contact"><li className="mr-15 cursor-pointer">Contact</li></Link>
                    <Link to="/instamart"><li className="mr-15 cursor-pointer">Instamart</li></Link>
                    <Link to="/cart"><li className="mr-15 cursor-pointer">Cart - {cartItems.length}  items</li></Link>
                </ul>
            </div>
            {user.name}
            <button
                style={{
                    padding: '8px 16px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    cursor: 'pointer',
                    outline: 'none'
                }}
                onClick={() => { setIsLogged(prevState => !prevState) }}
            >
                {isLogged ? 'Log Out' : 'Login'}
            </button>

        </div>
    );
};

export default HeaderComponent;