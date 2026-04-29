import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const username = localStorage.getItem("username") || "User";

const Dashboard = () => {
  const navigate = useNavigate();
  const logs = JSON.parse(localStorage.getItem("progressLogs")) || [];
  const latest = logs[logs.length - 1];

  const uniqueDays = new Set(logs.map((log) => log.date)).size;

  return (
    <div className="dashboardPage">
      <nav className="dashNav">
        <div className="dashBrand">
          <div className="dashLogo">✦</div>
          <span>GlowTrack</span>
        </div>

        <div className="dashLinks">
          <button className="active">▦ Dashboard</button>
          <button onClick={() => navigate("/products")}>✦ Products</button>
          <button onClick={() => navigate("/progress")}>＋ Log Progress</button>
          <button onClick={() => navigate("/analysis")}>↗ Analysis</button>
          <button onClick={() => navigate("/profile")}>♙ Profile</button>
        </div>
      </nav>

      <main className="dashMain">
        <section className="welcome">
          <h1>Welcome back, {username}!</h1>
          <p>Track your skincare journey and see your progress</p>
        </section>

        <section className="statsGrid">
          <div className="statCard">
            <div className="statIcon">✦</div>
            <p>Skin Type</p>
            <h2 style={{ color: "#000" }}>
              {latest?.skinType || "Unknown"}
            </h2>
          </div>

          <div className="statCard">
            <div className="statIcon">▣</div>
            <p>Entries Logged</p>
            <h2>{logs.length}</h2>
          </div>

          <div className="statCard">
            <div className="statIcon">↗</div>
            <p>Days Tracking</p>
            <h2>{uniqueDays}</h2>
          </div>
        </section>

        <section className="bottomGrid">
          <div className="recentCard">
            <div className="cardHeader">
              <h3>Recent Progress Entries</h3>
              <button onClick={() => navigate("/progress")}>＋ Add Entry</button>
            </div>

            {logs.length === 0 ? (
              <div className="emptyState">
                <div className="emptyIcon">▣</div>
                <p>No entries yet</p>
                <button onClick={() => navigate("/progress")}>
                  Log Your First Entry
                </button>
              </div>
            ) : (
              <div className="entryList">
                {logs.slice(-3).map((log, index) => (
                  <div className="entry" key={index}>
                    <strong>{log.date}</strong>
                    <span>
                      Acne {log.acne} • Oiliness {log.oiliness} • Dryness{" "}
                      {log.dryness} • Redness {log.redness}
                    </span>
                    <p>{log.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="actionsCard">
            <h3>Quick Actions</h3>

            <button onClick={() => navigate("/progress")}>
              <span>＋</span>
              <div>
                <strong>Log Today's Progress</strong>
                <p>Track your skin condition</p>
              </div>
            </button>

            <button onClick={() => navigate("/analysis")}>
              <span>↗</span>
              <div>
                <strong>View Analytics</strong>
                <p>See your progress charts</p>
              </div>
            </button>

            <button onClick={() => navigate("/profile")}>
              <span>♙</span>
              <div>
                <strong>View Profile</strong>
                <p>See your skincare routine</p>
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;