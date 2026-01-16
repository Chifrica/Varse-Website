import './styles.css'

const Features = () => {
    return (
        <div className="features">
            <p className="featuresHeaderTxt">Everything You Need On Campus</p>
            <p className="featuresHeaderSubTxt">Varse is your all-in-one campus marketplace buy and sell items, order food, and request gas refill</p>

            <div className='features-cards'>
                <div className="features-card">
                    <img />
                    <p className="featuresCardHeaderTxt">Buy & Sell on Campus</p>
                    <p>Connect with fellow students to buy and sell items quickly and safely</p>
                </div>
                <div className="features-card">
                    <img />
                    <p className="featuresCardHeaderTxt">Gas Refill Requests</p>
                    <p>Request refills through Varse and have it delivered without leaving your room</p>
                </div>
                <div className="features-card">
                    <img />
                    <p className="featuresCardHeaderTxt">Buy & Sell on Campus</p>
                    <p>Order meals from campus vendors and get them delivered straight to your room</p>
                </div>
            </div>
        </div>
    )
}

export default Features;