import './styles.css';
import logo from '../../assets/logo.png'

const NavBar = () => {

    return (
        <header className="navbar">
            <img src={logo} alt="Varse Logo" className="navbar-logo" height={100} width={100} />
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