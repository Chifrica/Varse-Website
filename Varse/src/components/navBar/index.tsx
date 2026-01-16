import './styles.css';

const NavBar = () => {

    const logo = '@/assets/logo.png';
    return (
        <header className="navbar">
            <img src={logo} alt="Varse Logo" className="navbar-logo" />
            <div className="navbar-links">
                <a href="#home" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>
            <div className="navbar-actions">
                <button className="navbar-button">Download App</button>
            </div>
        </header>
    );
}

export default NavBar;