import React from 'react';
import './HomePage.css'; // Optional: Style the page

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1>Bike spot</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/bikes">Bikes</a>
          <a href="/services">Services</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Your One-Stop Spot for Every Bikes</h2>
        <button>Explore Bikes</button>
      </section>

      {/* Main Section - Featured Bikes */}
      <section className="section">
        <h3>Featured Bikes</h3>
        <div className="card-container">
          <BikeCard name="SR  WORKS (samayapuram) PH:7010504161" type="ALL MODELS" price="Starting at RS 200 and Finishing time min ONEDAY" />
          <BikeCard name="ATR BIKE CARE (samayapuram) PH:8432712508" type="ALL MODELS" price="Starting at RS 400 and Finishing time TWO to THREE hours" />
          <BikeCard name="LNK BIKE SPOT (tolgate) PH:9432826321" type="ALL MODELS" price="Starting at RS 250 and Finishing time min ONEDAY" />
          <BikeCard name="PSL CARE (tolgate) PH:8110051551" type="ALL MODELS" price="Starting at RS 450 and Finishing time TWO to THREE hours"  />
          <BikeCard name="SPY BIKE WORKS (m.nallur) PH:9853887121" type="ALL MODELS" price="Starting at RS 300 and Finishing time min ONEDAY" />
          <BikeCard name="SPAR BIKE WORKS (m.nallur) PH:9457221580" type="ALL MODELS" price="Starting at RS 500 and Finishing time TWO to THREE hours" />
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section">
        <h3>Customer Reviews</h3>
        <div className="card-container">
          <ReviewCard name="John Doe" rating="5" review="Great bikes and service!" />
          <ReviewCard name="Jane Smith" rating="4" review="Loved the bike options available." />
          <ReviewCard name="James" rating="4.5" review=" bike service is nice" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Contact us at: info@bikespot.com</p>
        <p>Follow us on social media!</p>
        <nav>
          <a href="/">Home</a>
          <a href="/bikes">Bikes</a>
          <a href="/services">Services</a>
        </nav>
      </footer>
    </div>
  );
};

// Bike Card Component
const BikeCard = ({ name, type, price }) => (
  <div className="card">
    <h4>{name}</h4>
    <p>{type}</p>
    <p>{price}</p>
    <button> <a href="https://www.bikespot.org/">Learn More</a></button>
  </div>
);

// Service Card Component
const ServiceCard = ({ title, description }) => (
  <div className="card">
    <h4>{title}</h4>
    <p>{description}</p>
    <button>View Options</button>
  </div>
);

// Review Card Component
const ReviewCard = ({ name, rating, review }) => (
  <div className="card">
    <h4>{name}</h4>
    <p>Rating: {rating} / 5</p>
    <p>"{review}"</p>
  </div>
);

export default HomePage;