import './styles.css'

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-header">
                <h1>Trusted by Students Across Campus</h1>
                <p>Real experiences from students using Varse every day</p>
            </div>

            <div className="testimonials-grid">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-user">
                            <img src="" alt="Student" />
                            <div>
                                <p className="name">Zara Jacob</p>
                                <p className="level">500lvl Student</p>
                            </div>
                        </div>

                        <p className="testimonial-text">
                            Since joining Varse, more students find my business without me stressing.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
