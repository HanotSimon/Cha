import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#">💖 Mon Cœur 💖</a>
            </div>

            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                ☰
            </div>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="#galery">Galerie</a></li>
                <li><a href="#compliments">Compliments</a></li>
                <li><a href="#compatibility">Compatibilité</a></li>
                <li><a href="#" id="surprise-link">Surprise</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
