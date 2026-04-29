import { useEffect, useState } from "react";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "How does your skin typically feel a few hours after washing?",
    type: "single",
    options: [
      "Tight and dry",
      "Comfortable and balanced",
      "Oily, especially in T-zone",
      "Very oily all over",
    ],
  },
  {
    question: "How would you describe your pore size?",
    type: "single",
    options: [
      "Nearly invisible",
      "Small to medium",
      "Large in T-zone only",
      "Large overall",
    ],
  },
  {
    question: "How often do you experience breakouts?",
    type: "single",
    options: ["Rarely or never", "Occasionally", "Frequently", "Almost constantly"],
  },
  {
    question: "What are your main skin concerns? (Select all that apply)",
    type: "multiple",
    options: [
      "Acne",
      "Dark spots/Hyperpigmentation",
      "Fine lines/Wrinkles",
      "Dryness",
      "Excess oil",
      "Redness/Sensitivity",
      "Dull complexion",
    ],
  },
  {
    question: "How sensitive is your skin?",
    type: "single",
    options: [
      "Not sensitive",
      "Slightly sensitive",
      "Moderately sensitive",
      "Very sensitive",
    ],
  },
];

const Quiz = () => {
  const navigate = useNavigate(); 
  
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  useEffect(() => {
      const user = localStorage.getItem("user");

      if (!user) {
        navigate("/login");
      }
    }, [navigate]);

  const q = questions[step];

  const handleSelect = (option) => {
    if (q.type === "multiple") {
      const prev = answers[step] || [];
      const updated = prev.includes(option)
        ? prev.filter((i) => i !== option)
        : [...prev, option];

      setAnswers({ ...answers, [step]: updated });
    } else {
      setAnswers({ ...answers, [step]: option });
    }
  };

  const isSelected = (option) => {
    if (q.type === "multiple") {
      return (answers[step] || []).includes(option);
    }
    return answers[step] === option;
  };

  return (
    <div className="quizPage">
      <div className="progress">
        <div
          className="bar"
          style={{ width: `${((step + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="card">
        <h2>{q.question}</h2>

        <div className="options">
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`option ${isSelected(opt) ? "active" : ""}`}
              onClick={() => handleSelect(opt)}
            >
              <span className="circle"></span>
              {opt}
            </button>
          ))}
        </div>

        <div className="actions">
          {step > 0 && (
            <button className="back" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}

          <button
            className="next"
            onClick={() => {
                if (step === questions.length - 1) {
                navigate("/result", { state: { answers } }); // ✅ send answers
                } else {
                setStep(step + 1);
                }
            }}
            >
                {step === questions.length - 1 ? "Get Results" : "Next"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;