import React from "react";
import Logo from "assets/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar_container">
                <img src={Logo} alt="Logo" />
                <div>
                    <a>Search</a>
                    <a>Login</a>
                    <button>Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
