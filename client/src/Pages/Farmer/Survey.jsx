import React from "react";

const RiskAssessmentSurvey = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-gray-50"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white px-4 sm:px-6 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3 text-gray-800">
          <div className="size-8 text-[#4CAF50]">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight">
            FarmWise
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvPxTVpuJpHwmMBJabAiuy9njx7aTTskomEUjtHpWZ34leetZ0NgqQAcRDQmDk1LlgUBcOFCfvP4afjGGUY_1xcF8CKndA9bvTT_qpfHLWZhhbeG3I11z2pe8OBXJ9x5fa8-VuobU_Lff2y0k8fZdy4OPttRHt0N104J_0QgNL0ncLjN8BZAnlKRz2uYssDDjyaoF9wcsJvdG-QjdtqoftEuPplkWXgyxvn7sxplzLzxubhyNV8U8wg0sg0xBnIvMEWFvANiKuDwEO')",
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-8 px-4 sm:px-6">
        <div className="layout-content-container flex w-full max-w-2xl flex-col gap-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
              Risk Assessment Survey
            </h1>
            <p className="mt-2 text-gray-500">
              Answer the following questions to calculate your farm's risk
              score.
            </p>
          </div>

          {/* Animal Health Section */}
          <div className="space-y-8">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Animal Health
              </h3>
              <div className="mt-6 space-y-6">
                {[
                  "Do you quarantine new animals?",
                  "Do you have a biosecurity plan?",
                  "Do you regularly monitor animal health?",
                ].map((q, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <p className="text-gray-800 font-medium">
                      {idx + 1}. {q}
                    </p>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 rounded-md border px-4 py-3 flex-1 cursor-pointer border-gray-300 has-[:checked]:bg-green-50 has-[:checked]:border-green-500 has-[:checked]:ring-2 has-[:checked]:ring-green-200">
                        <input
                          type="radio"
                          name={`q${idx}`}
                          className="h-4 w-4 text-green-600"
                        />
                        <span className="text-sm text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-3 rounded-md border px-4 py-3 flex-1 cursor-pointer border-gray-300 has-[:checked]:bg-red-50 has-[:checked]:border-red-500 has-[:checked]:ring-2 has-[:checked]:ring-red-200">
                        <input
                          type="radio"
                          name={`q${idx}`}
                          className="h-4 w-4 text-red-600"
                        />
                        <span className="text-sm text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Worker Safety Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Worker Safety
              </h3>
              <div className="mt-6 space-y-6">
                {[
                  "Do workers wear protective gear?",
                  "Do you provide safety training?",
                  "Do you have emergency procedures?",
                ].map((q, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <p className="text-gray-800 font-medium">
                      {idx + 4}. {q}
                    </p>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 rounded-md border px-4 py-3 flex-1 cursor-pointer border-gray-300 has-[:checked]:bg-green-50 has-[:checked]:border-green-500 has-[:checked]:ring-2 has-[:checked]:ring-green-200">
                        <input
                          type="radio"
                          name={`wq${idx}`}
                          className="h-4 w-4 text-green-600"
                        />
                        <span className="text-sm text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-3 rounded-md border px-4 py-3 flex-1 cursor-pointer border-gray-300 has-[:checked]:bg-red-50 has-[:checked]:border-red-500 has-[:checked]:ring-2 has-[:checked]:ring-red-200">
                        <input
                          type="radio"
                          name={`wq${idx}`}
                          className="h-4 w-4 text-red-600"
                        />
                        <span className="text-sm text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Score */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Risk Score
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-800">
                    Risk Level
                  </p>
                  <span className="font-semibold text-green-600">Low</span>
                </div>
                <div className="w-full rounded-full bg-gray-200 h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "25%" }}
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
            <div className="mt-2">
              <button className="flex w-full h-12 items-center justify-center rounded-md bg-[#4CAF50] text-white font-semibold shadow-md hover:bg-green-600 transition">
                Submit &amp; Generate Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RiskAssessmentSurvey;
