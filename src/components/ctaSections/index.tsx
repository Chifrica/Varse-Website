import './styles.css'
import appleGoogle from '../../assets/playstore.png'
import newPhone from '../../assets/phone.png'

const CtaSections = () => {
    return (
        <section className="cta-sections">
            <img src={newPhone} alt="Phone" />
            <div className="cta-sections-header">
                <h1>Join Varse and Make Campus <br /> Life smarter</h1>
                <p>Join hundreds of students already using Varse to make campus life effortless</p>
                <img src={appleGoogle} alt="Apple Google" className='appleGoogle' />
            </div>
        </section>
    );
};

export default CtaSections;
