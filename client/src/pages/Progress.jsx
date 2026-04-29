import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Progress.css";

const Progress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const skinType = location.state?.skinType || "Unknown";

  const [form, setForm] = useState({
    acne: 3,
    oiliness: 3,
    dryness: 3,
    redness: 3,
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveProgress = (e) => {
    e.preventDefault();

    const oldLogs = JSON.parse(localStorage.getItem("progressLogs")) || [];

    const newLog = {
      ...form,
      skinType,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem("progressLogs", JSON.stringify([...oldLogs, newLog]));

    navigate("/dashboard");
  };

  return (
    <div className="progressPage">
      <div className="progressCard">
        <h1>Skin Progress Tracking</h1>
        <p>Log your skin condition to monitor improvement over time.</p>

        <form className="progressForm" onSubmit={saveProgress}>
          <label>Acne Level: {form.acne}</label>
          <input
            type="range"
            name="acne"
            min="1"
            max="5"
            value={form.acne}
            onChange={handleChange}
          />

          <label>Oiliness Level: {form.oiliness}</label>
          <input
            type="range"
            name="oiliness"
            min="1"
            max="5"
            value={form.oiliness}
            onChange={handleChange}
          />

          <label>Dryness Level: {form.dryness}</label>
          <input
            type="range"
            name="dryness"
            min="1"
            max="5"
            value={form.dryness}
            onChange={handleChange}
          />

          <label>Redness Level: {form.redness}</label>
          <input
            type="range"
            name="redness"
            min="1"
            max="5"
            value={form.redness}
            onChange={handleChange}
          />

          <label>Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Write your skin condition today..."
          />

          <button type="submit">Save Progress</button>
        </form>
      </div>
    </div>
  );
};

export default Progress;