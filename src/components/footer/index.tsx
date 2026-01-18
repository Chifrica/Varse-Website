import './styles.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <hr className="footerHr" />

            <div className="footerMain">
                <img src={logo} alt="Varse logo" className="footerLogo" />

                <div className="footerLinks">
                    <div>
                        <h1>Resources</h1>
                        <ul>
                            <li>FAQ / Help Center</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div>
                        <h1>Quick Links</h1>
                        <ul>
                            <li>Features</li>
                            <li>How It Works</li>
                            <li>Download App</li>
                        </ul>
                    </div>

                    <div>
                        <h1>Contacts</h1>
                        <ul className="contactList">
                            <li><span>📧</span> Varse248@gmail.com</li>
                            <li><span>📞</span> +234-90-2121-1789</li>
                        </ul>

                        <h1>Follow Us</h1>
                        <ul className="socials">
                            <li>📘</li>
                            <li>💬</li>
                            <li>🔗</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="footerHr" />

            <div className="footerBottom">
                <p>© 2025 Varse. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;