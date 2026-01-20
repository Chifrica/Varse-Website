import './styles.css'
import logo from '../../assets/logo.png'
import { Mail, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

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

                    <div className='contacts' id='#contact'>
                        <div>
                            <h1>Contacts</h1>
                            <ul className="contactList">
                                <a href="mailto:varseafrica@gmail.com"><li><span><Mail size={18} /></span>varseafrica@gmail.com</li></a>
                                <a href="tel:09021211789"><li><span><Phone size={18} /></span> +234-90-2121-1789</li></a>
                            </ul>
                        </div>
                        <div>
                            <h1>Follow Us</h1>
                            <ul className="socials">
                                <a href="#"><li><FaFacebook size={30} color="#3b5998" /></li></a>
                                <a href="https://www.instagram.com/reel/DRKVdKqCK-P/?igsh=MTVxdnoxbnVxNGhwcg=="><li><FaInstagram size={30} color="#E1306C" /></li></a>
                                <a href="https://wa.link/7jporw"><li><FaWhatsapp size={30} color="#25D366" /></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="footerHr" />

            <div className="footerBottom">
                <p>© 2026 Varse. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;