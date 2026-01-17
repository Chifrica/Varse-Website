import './styles.css'
import schoolBag from '../../assets/schoolBag.png';
import cart from '../../assets/cart.png';
import logo from '../../assets/logo.png';
import school from '../../assets/school.png';

const HowItWorks = () => {
    return (
        <section className="howItWorks">
            <div className="howItWorksHeader">
                <h2>How It Works?</h2>
                <p>Everything you need on campus, in just a few simple steps.</p>
            </div>

            <div className="howItWorksBody">
                {/* LEFT – Image */}
                <div className="stepsImage">
                    <div className="imageDecoration">
                        <span className="ring ring1"></span>
                        <span className="ring ring2"></span>
                        <span className="ring ring3"></span>

                        {/* floating icons */}
                        <div className="floatingIcon icon1">
                            <img src={schoolBag} alt="school bag" />
                        </div>
                        <div className="floatingIcon icon2">
                            <img src={school} alt="cart" />
                        </div>
                        <div className="floatingIcon icon3">
                            <img src={schoolBag} alt="school" />
                        </div>
                        <div className="floatingIcon icon4">
                            <img src={school} alt="How Varse works" />
                        </div>
                        <div className="floatingIcon icon5">
                            <img src={cart} alt="How Varse works" />
                        </div>
                        <div className="floatingIcon icon6">
                            <img src={cart} alt="How Varse works" />
                        </div>

                        <img className="mainImage" src={logo} alt="How Varse works" />
                    </div>
                </div>

                {/* RIGHT – Steps */}
                <div className="steps">
                    {[
                        {
                            title: "Create Your Account",
                            desc: "Sign up in minutes and set up your student profile to get started on Varse",
                        },
                        {
                            title: "Browse or Post",
                            desc: "Explore items for sale, order food, request gas refills, or post what you want to sell",
                        },
                        {
                            title: "Place Your Order",
                            desc: "Make your order or purchase with just a few taps, all within the app",
                        },
                        {
                            title: "Get It Delivered",
                            desc: "Receive your items, food, or gas right on campus fast, safe, and convenient",
                        },
                    ].map((item, index) => (
                        <div className="step" key={index}>
                            <div className="stepIndicator">
                                <span className="stepNumber">{index + 1}</span>
                                {index !== 3 && <span className="stepLine" />}
                            </div>

                            <div className="stepContent">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HowItWorks;
