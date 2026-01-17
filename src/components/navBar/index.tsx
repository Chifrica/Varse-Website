import { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo.png'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <img src={logo} alt="Varse Logo" className="navbar-logo" height={50} width={50} />

            {/* Hamburger Menu Icon */}
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
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