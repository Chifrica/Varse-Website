import './styles.css'

const HowItWorks = () => {
    return (
        <section className="howItWorks">
            <div className="howItWorksHeader">
                <h2>How It Works?</h2>
                <p>Everything you need on campus, in just a few steps.</p>
            </div>

            <div className="howItWorksBody">
                {/* LEFT – Steps */}
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

                {/* RIGHT – Image */}
                <div className="stepsImage">
                    <img src="/images/varse-how-it-works.png" alt="How Varse works" />
                </div>
            </div>

        </section>
    );
};

export default HowItWorks;
