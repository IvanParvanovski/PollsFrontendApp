import { useState } from "react";

const colorMap: Record<string, string> = {
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  // extend this as needed
};

function Card({ cardColor='blue' }) {
  const [showForm, setShowForm] = useState(false);
  const colorClass = colorMap[cardColor] || "text-blue-500";
   
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 dark:bg-slate-800 dark:text-white dark:ring-white/10 transition hover:bg-zinc-100 dark:hover:bg-slate-700">
      <div className="flex items-start gap-5">
        {/* Icon */}
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className={`h-12 w-12 ${colorClass}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
          />
          </svg>

        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <div onClick={() => setShowForm(!showForm)} >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              This is my poll
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>ID:</strong> 362161236123
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Owner Username:</strong> osman
            </p>
          </div>

          {/* Question & Form */}
          {showForm && (
            <div className="space-y-4 pt-2">
              <p className="text-base font-medium">
                Which of these cars do you like the most?
              </p>
              <form action="#" method="post" className="space-y-3">
                <fieldset className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="one"
                      name="first_item"
                      value="1"
                      className="h-4 w-4 text-rose-500"
                    />
                    <label htmlFor="one" className="text-sm">
                      Tesla
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="two"
                      name="first_item"
                      value="2"
                      className="h-4 w-4 text-rose-500"
                    />
                    <label htmlFor="two" className="text-sm">
                      Ford
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="three"
                      name="first_item"
                      value="3"
                      className="h-4 w-4 text-rose-500"
                    />
                    <label htmlFor="three" className="text-sm">
                      Toyota
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="four"
                      name="first_item"
                      value="4"
                      className="h-4 w-4 text-rose-500"
                    />
                    <label htmlFor="four" className="text-sm">
                      BMW
                    </label>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="rounded-lg bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-800 transition"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { Card };
