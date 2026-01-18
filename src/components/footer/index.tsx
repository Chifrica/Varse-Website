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

                    <div className='contacts'>
                        <div>
                            <h1>Contacts</h1>
                            <ul className="contactList">
                                <li><span><Mail size={18} /></span> Varse248@gmail.com</li>
                                <li><span><Phone size={18} /></span> +234-90-2121-1789</li>
                            </ul>
                        </div>
                        <div>
                            <h1>Follow Us</h1>
                            <ul className="socials">
                                <li><FaFacebook size={30} color="#3b5998" /></li>
                                <li><FaInstagram size={30} color="#E1306C" /></li>
                                <li><FaWhatsapp size={30} color="#25D366" /></li>
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