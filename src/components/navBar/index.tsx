import { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo.png'
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <img src={logo} alt="Varse Logo" className="navbar-logo" height={50} width={50} />

            {/* Hamburger / Cancel Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>

            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <button className="navbar-button mobile-only">Download App</button>
            </div>

            <div className="navbar-actions desktop-only">
                <button className="navbar-button">Download App</button>
            </div>
        </header>
    );
}


export default NavBar;