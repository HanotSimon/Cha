import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">💖 Mon Cœur 💖</div>
            <ul className="nav-links">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#photos">Photos</a></li>
                <li><a href="#messages">Messages</a></li>
                <li><a href="#surprises">Surprises</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
