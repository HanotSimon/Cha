import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><a href="#">💖 Mon Cœur 💖</a></div>
            <ul className="nav-links">
                <li><a href="#">Accueil</a></li>
                <li><a href="#galery">Galerie</a></li>
                <li><a href="#messages">Messages</a></li>
                <li><a href="#surprises">Surprises</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
