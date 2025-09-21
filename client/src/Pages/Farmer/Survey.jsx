import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RiskAssessmentSurvey = () => {
  const navigate = useNavigate();

  const questions = [
    "Does the pig cough/sneeze or have breathing difficulty?",
    "Any discharge or foam from nose/mouth?",
    "Does the pig have diarrhea — watery/bloody?",
    "Are there red spots, wounds, or swelling on the skin?",
    "Is the pig dull, lying down often, or struggling to walk?",
    "Is the pig making unusual loud noises or showing irritability?",
    "Is the pig eating less or showing abnormal behavior?",
    "Are there signs of fever or abnormal body temperature?",
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill("No"));

  const yesCount = answers.filter((ans) => ans === "Yes").length;

  let riskLevel = "Low";
  let progress = "25%";
  let riskColor = "green";
  if (yesCount >= 3 && yesCount <= 5) {
    riskLevel = "Medium";
    progress = "65%";
    riskColor = "yellow";
  } else if (yesCount >= 6) {
    riskLevel = "High";
    progress = "100%";
    riskColor = "red";
  }

  const handleAnswerChange = (idx, value) => {
    const newAnswers = [...answers];
    newAnswers[idx] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-300">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-background-dark px-4 sm:px-6 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img
            onClick={() => navigate("/farmer/dashboard")}
            className="w-24 sm:w-32 cursor-pointer"
            src="\src\assets\pnhg.png"
            alt=""
          />
        </div>

        {/* Help & Profile */}
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-green-400 hover:text-gray-900">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvPxTVpuJpHwmMBJabAiuy9njx7aTTskomEUjtHpWZ34leetZ0NgqQAcRDQmDk1LlgUBcOFCfvP4afjGGUY_1xcF8CKndA9bvTT_qpfHLWZhhbeG3I11z2pe8OBXJ9x5fa8-VuobU_Lff2y0k8fZdy4OPttRHt0N104J_0QgNL0ncLjN8BZAnlKRz2uYssDDjyaoF9wcsJvdG-QjdtqoftEuPplkWXgyxvn7sxplzLzxubhyNV8U8wg0sg0xBnIvMEWFvANiKuDwEO')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-6 px-4 sm:px-6">
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-black">
              Risk Assessment Survey
            </h1>
            <p className="mt-2 text-gray-700">
              Answer the following questions to calculate your farm's risk
              score.
            </p>
          </div>

          {/* Questions Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Animal & Worker Health
            </h3>
            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
              {questions.map((q, idx) => (
                <div key={idx} className="flex flex-col gap-2 sm:gap-3">
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    {idx + 1}. {q}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <label className="flex items-center gap-2 sm:gap-3 rounded-md border px-3 sm:px-4 py-2 flex-1 cursor-pointer border-gray-300">
                      <input
                        type="radio"
                        name={`q${idx}`}
                        className="h-4 w-4 text-green-600"
                        checked={answers[idx] === "Yes"}
                        onChange={() => handleAnswerChange(idx, "Yes")}
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 sm:gap-3 rounded-md border px-3 sm:px-4 py-2 flex-1 cursor-pointer border-gray-300">
                      <input
                        type="radio"
                        name={`q${idx}`}
                        className="h-4 w-4 text-red-600"
                        checked={answers[idx] === "No"}
                        onChange={() => handleAnswerChange(idx, "No")}
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Score */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Risk Score
            </h3>
            <div className="mt-3 sm:mt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  Risk Level
                </p>
                <span
                  className={`font-semibold ${
                    riskColor === "green"
                      ? "text-green-600"
                      : riskColor === "yellow"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {riskLevel}
                </span>
              </div>
              <div className="w-full rounded-full bg-gray-200 h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    riskColor === "green"
                      ? "bg-green-500"
                      : riskColor === "yellow"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: progress }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={() => navigate("/farmer/riskalert")}
              className="flex w-full h-12 items-center justify-center rounded-md bg-[#4CAF50] text-white font-semibold shadow-md hover:bg-green-600 transition"
            >
              Submit &amp; Generate Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiskAssessmentSurvey;
