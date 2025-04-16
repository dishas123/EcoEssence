import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../context/itemContext";

const Header = () => {
    const { itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <div className="header">
            <h1 className="gfg">EcoEssence</h1>
            <h3 style={{ color: "aqua",backgroundColor:"green" }}>Total Price: Rs.{totalPrice.toFixed(2)}</h3>

            <nav>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/donate" style={{ marginRight: "15px" }}>Donate</Link>
                    </li>
                    <li>
                        <Link to="/rewards">Rewards</Link>
                    </li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/recommended-items">Recommended Items</Link></li>
            
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    
                    
                   
                </ul>
            </nav>

            <div className="cart-num">
                <div className="cart-items">{itemsInCart}</div>
                <FontAwesomeIcon icon={faCartShopping} size="4x" />
            </div>
        </div>
    );
};

export default Header;