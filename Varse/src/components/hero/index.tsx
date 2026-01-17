import NavBar from "../navBar";
import "./styles.css";
import iphone from '../../assets/iPhone 13.png'
import playstore from '../../assets/playstore.png'

const Hero = () => {
    return (
        <>
            <NavBar />

            <section className="hero">
                {/* Text */}
                <div className="heroText">
                    <h1 className="txt">
                        Everything Students Need on Campus <br />
                        In<span> One App</span>
                    </h1>

                    <p className="subTxt">
                        From food and services to ecommerce, Varse centralizes campus
                        commerce so you can move <br /> faster and stress less.
                    </p>

                    {/* Store buttons */}
                    <div className="storeButtons">
                        <img src={playstore} alt="App Store" />
                    </div>
                </div>

                {/* Phone + floating cards */}
                <div className="heroVisual">
                    <div className="phoneGlow"></div>

                    <img
                        src={iphone}
                        alt="Varse App"
                        className="phoneImage"
                    />

                    {/* Floating cards */}
                    <div className="floatingCard left top">
                        🛒 <div><strong>Student Marketplace</strong><p>Buy & sell with students</p></div>
                    </div>

                    <div className="floatingCard right top">
                        🚚 <div><strong>Gas Refill</strong><p>Fast, safe gas delivery</p></div>
                    </div>

                    <div className="floatingCard left bottom">
                        🍔 <div><strong>Food & Snacks</strong><p>Order fast on campus</p></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
