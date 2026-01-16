import './styles.css'

const Features = () => {
    return (
        <section className="features">
            <div className="featuresHeader">
                <h2 className="featuresHeaderTxt">Everything You Need On Campus</h2>
                <p className="featuresHeaderSubTxt">Varse is your all-in-one campus marketplace buy and sell items, order food, and request gas refill</p>
            </div>

            <div className='features-cards'>
                <div className="features-card">
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                    <h3 className="featuresCardHeaderTxt">Buy & Sell on Campus</h3>
                    <p className="featuresCardSubTxt">Connect with fellow students to buy and sell items quickly and safely</p>
                </div>

                <div className="features-card">
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                    </div>
                    <h3 className="featuresCardHeaderTxt">Gas Refill Requests</h3>
                    <p className="featuresCardSubTxt">Request refills through Varse and have it delivered without leaving your room</p>
                </div>

                <div className="features-card">
                    <div className="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-3.658 3.001 3.001 0 0 0 3.75 3.658 3.001 3.001 0 0 0 3.75-3.658 3.001 3.001 0 0 0 3.75 3.658m-15 0V4.87h15v4.479m-15 0a2.999 2.999 0 0 1 3.75 0 2.999 2.999 0 0 1 3.75 0 2.999 2.999 0 0 1 3.75 0 2.999 2.999 0 0 1 3.75 0" />
                        </svg>
                    </div>
                    <h3 className="featuresCardHeaderTxt">Food Delivery</h3>
                    <p className="featuresCardSubTxt">Order meals from campus vendors and get them delivered straight to your room</p>
                </div>
            </div>
        </section>
    );
}


export default Features;