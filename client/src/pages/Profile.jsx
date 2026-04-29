import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const skinType = localStorage.getItem("skinType") || "Not completed yet";
  const concerns = JSON.parse(localStorage.getItem("skinConcerns") || "[]");

  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="profilePage">
      <nav className="profileNav">
        <div className="profileBrand">
          <div className="profileLogo">✦</div>
          <span>GlowTrack</span>
        </div>

        <div className="profileLinks">
          <button onClick={() => navigate("/dashboard")}>▦ Dashboard</button>
          <button onClick={() => navigate("/products")}>✦ Products</button>
          <button onClick={() => navigate("/progress")}>＋ Log Progress</button>
          <button onClick={() => navigate("/analysis")}>↗ Analysis</button>
          <button className="active">♙ Profile</button>
        </div>
      </nav>

      <main className="profileMain">
        <section className="profileTitle">
          <h1>Your Profile</h1>
          <p>View your skincare profile and consultation results</p>
        </section>

        <section className="profileCard">
          <div className="userInfo">
            <div className="avatar">♙</div>
            <div>
              <h2>{user?.full_name || "Guest"}</h2>
              <p>{user?.email || "No email"}</p>
            </div>
          </div>

          <div className="profileStats">
            <div>
              <p>✦ Skin Type</p>
              <h3>{skinType}</h3>
            </div>

            <div>
              <p>▣ Consultation Date</p>
              <h3>{new Date().toLocaleDateString()}</h3>
            </div>
          </div>

          
        </section>

        <section className="routineGridProfile">
          <div className="routineCardProfile">
            <div className="routineHeader">
              <div className="sunIcon">☀</div>
              <h2>Morning Routine</h2>
            </div>

            {["Gentle Cleanser", "Toner", "Hydrating Moisturizer", "SPF 30+ Sunscreen"].map(
              (item, index) => (
                <div className="routineItem" key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              )
            )}
          </div>

          <div className="routineCardProfile">
            <div className="routineHeader">
              <div className="moonIcon">☾</div>
              <h2>Night Routine</h2>
            </div>

            {["Cleansing Oil/Balm", "Gentle Cleanser", "Hydrating Serum", "Night Cream", "Eye Cream"].map(
              (item, index) => (
                <div className="routineItem" key={item}>
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="accountActions">
          <h2>Account Actions</h2>

          <button onClick={() => navigate("/quiz")}>
            <span>✦</span>
            <div>
              <strong>Retake Skin Quiz</strong>
              <p>Update your skin analysis</p>
            </div>
          </button>

          <button className="signOut" onClick={signOut}>
            <span>↪</span>
            <div>
              <strong>Sign Out</strong>
              <p>Log out of your account</p>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default Profile;