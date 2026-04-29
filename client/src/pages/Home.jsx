import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

 

  return (
    <div className="homePage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <div className="brandIcon">✦</div>
          <span>GlowTrack</span>
        </div>

        <div className="navRight">
          <button className="linkBtn" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button onClick={() => navigate("/get-started")}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="mainIcon">✦</div>
        <h1>GlowTrack</h1>
        <h2>Your Personal Skincare Consultation & Progress Analysis System</h2>
        <p>
          Discover your skin type, get personalized routines, and track your
          journey to healthier, glowing skin
        </p>

        <div className="heroButtons">
          <button onClick={() => navigate("/get-started")}>Get Started Free</button>
          <button className="outlineBtn" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="featureCard">
          <div>✦</div>
          <h3>Skin Analysis</h3>
          <p>Take our quiz to discover your unique skin type and concerns</p>
        </div>

        <div className="featureCard">
          <div>♡</div>
          <h3>Personalized Routine</h3>
          <p>Get skincare routines based on your needs</p>
        </div>

        <div className="featureCard">
          <div>↗</div>
          <h3>Progress Tracking</h3>
          <p>Log your skin condition and track improvement over time</p>
        </div>

        <div className="featureCard">
          <div>🛡</div>
          <h3>Smart Insights</h3>
          <p>Understand what is working for your skin</p>
        </div>
      </section>

      {/* How it works */}
      <section className="how" id="start-section">
        <h2>How It Works</h2>
        <p>Your journey to better skin in 3 simple steps</p>

        <div className="steps">
          <div>
            <span>1</span>
            <h3>Complete the Quiz</h3>
            <p>Answer questions about your skin concerns, lifestyle, and routine</p>
          </div>

          <div>
            <span>2</span>
            <h3>Get Your Results</h3>
            <p>Receive your skin type analysis and personalized recommendations</p>
          </div>

          <div>
            <span>3</span>
            <h3>Track Your Progress</h3>
            <p>Log your skin condition regularly and watch improvements unfold</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="get-started">
        <h2>Ready to Start Your Glow Journey?</h2>
        <p>Join thousands of users who are achieving their best skin ever</p>
        <button>Create Free Account</button>
      </section>
    </div>
  );
};

export default Home;