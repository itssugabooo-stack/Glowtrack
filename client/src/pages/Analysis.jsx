import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";
import "./Analysis.css";

const Analysis = () => {
  const navigate = useNavigate();
  const logs = JSON.parse(localStorage.getItem("progressLogs")) || [];

  const chartData = logs.map((log) => ({
    date: log.date,
    acne: Number(log.acne),
    redness: Number(log.redness),
    oiliness: Number(log.oiliness),
    dryness: Number(log.dryness),
  }));

  const latest = logs[logs.length - 1];

  return (
    <div className="analysisPage">
      <nav className="analysisNav">
        <div className="analysisBrand">
          <div className="analysisLogo">✦</div>
          <span>GlowTrack</span>
        </div>

        <div className="analysisLinks">
          <button onClick={() => navigate("/dashboard")}>▦ Dashboard</button>
          <button>✦ Products</button>
          <button onClick={() => navigate("/progress")}>＋ Log Progress</button>
          <button className="active">↗ Analysis</button>
          <button onClick={() => navigate("/profile")}>
                ♙ Profile
           </button>
        </div>
      </nav>

      <main className="analysisMain">
        <section className="analysisCards">
          <div className="analysisCard">
            <p>Acne Level</p>
            <span>—</span>
            <h2>{latest?.acne || "0"}.0</h2>
            <small>Stable</small>
          </div>

          <div className="analysisCard">
            <p>Redness</p>
            <span>—</span>
            <h2>{latest?.redness || "0"}.0</h2>
            <small>Stable</small>
          </div>

          <div className="analysisCard">
            <p>Oiliness</p>
            <span>—</span>
            <h2>{latest?.oiliness || "0"}.0</h2>
            <small>Stable</small>
          </div>

          <div className="analysisCard">
            <p>Dryness</p>
            <span>—</span>
            <h2>{latest?.dryness || "0"}.0</h2>
            <small>Stable</small>
          </div>
        </section>

        <section className="chartBox">
          <h3>Overall Progress Trends</h3>

          {logs.length === 0 ? (
            <p className="noData">No progress data yet.</p>
          ) : (
            <ResponsiveContainer width="100%" height={380}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffd6e4" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="acne" stroke="#ff478b" />
                <Line type="monotone" dataKey="redness" stroke="#ff9ec3" />
                <Line type="monotone" dataKey="oiliness" stroke="#ffb6d1" />
                <Line type="monotone" dataKey="dryness" stroke="#f5a6c7" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </section>
      </main>
    </div>
  );
};

export default Analysis;