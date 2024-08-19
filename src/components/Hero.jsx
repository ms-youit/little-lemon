import hero from '../assets/hero.jpg';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-copy">
                    <h1 className="title">
                        Little Lemon
                        <br />
                        <span>Chicago</span>
                    </h1>
                    <div className="description">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </div>
                    <a href="#booking-form" className="cta">
                        Book a table
                    </a>
                </div>

                <div className="hero-image">
                    <img src={hero} alt="" />
                </div>
            </div>
        </section>
    );
}