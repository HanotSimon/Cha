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
                <li><a href="#">Accueil</a></li>
                <li><a href="#galery">Galerie</a></li>
                <li><a href="#messages">Messages</a></li>
                <li><a href="#surprises">Surprises</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
