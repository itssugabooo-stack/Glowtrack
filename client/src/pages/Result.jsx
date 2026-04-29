import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers || {};

  const getSkinType = () => {
    let dry = 0;
    let oily = 0;

    Object.values(answers).forEach((ans) => {
      if (typeof ans === "string") {
        const text = ans.toLowerCase();
        if (text.includes("dry") || text.includes("tight")) dry++;
        if (text.includes("oily") || text.includes("large")) oily++;
      }
    });

    if (dry > oily) return "Dry Skin";
    if (oily > dry) return "Oily Skin";
    return "Combination Skin";
  };

  const skinType = getSkinType();

  // ✅ SAVE TO LOCALSTORAGE (IMPORTANT FIX)
  localStorage.setItem("skinType", skinType);
  localStorage.setItem("skinConcerns", JSON.stringify(answers[3] || []));

  const routines = {
    "Dry Skin": {
      morning: [
        "Hydrating Cleanser",
        "Hydrating Toner",
        "Rich Moisturizer",
        "Sunscreen",
      ],
      night: [
        "Gentle Cleanser",
        "Hyaluronic Acid Serum",
        "Barrier Repair Cream",
      ],
    },
    "Oily Skin": {
      morning: [
        "Gel Cleanser",
        "Light Toner",
        "Oil-Free Moisturizer",
        "Sunscreen",
      ],
      night: [
        "Foaming Cleanser",
        "Niacinamide Serum",
        "Lightweight Moisturizer",
      ],
    },
    "Combination Skin": {
      morning: [
        "Gentle Cleanser",
        "Balancing Toner",
        "Lightweight Moisturizer",
        "Sunscreen",
      ],
      night: [
        "Gentle Cleanser",
        "Acne-care Serum",
        "Moisturizer",
      ],
    },
  };

  const routine = routines[skinType];

  return (
    <div className="resultPage">
      <div className="resultCard">
        <div className="resultIcon">✦</div>

        <h1>Your Skin Result</h1>
        <p className="subtitle">
          Based on your answers, your skin type is:
        </p>

        <div className="skinType">{skinType}</div>

        <div className="routineBox">
          <h3>Recommended Routine</h3>

          <div className="routineGrid">
            <div>
              <h4>Morning</h4>
              {routine.morning.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div>
              <h4>Night</h4>
              {routine.night.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            navigate("/progress", { state: { skinType } })
          }
        >
          Start Progress Tracking
        </button>
      </div>
    </div>
  );
};

export default Result;