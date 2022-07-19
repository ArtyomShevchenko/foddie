import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/icons/logo.svg";

const links = ["Home", "Product", "Promo", "About", "Contact"];

function Navigation() {

    let key = 0;

    return (
        <div className="navigation-container">
            <img src={logo} alt="Logo" />
            <nav>
                {links.map(link => {
                    return (
                        <li key={key++}>
                            <Link to={ link === "Home" ? "/" : "/" + link } >
                                {link}
                            </Link>
                        </li>)
                })}
            </nav>
        </div>
    )
};

export default Navigation;
