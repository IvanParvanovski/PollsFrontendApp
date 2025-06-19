import { useState } from "react";
import PollIcon from "./poll-icon";

const colorMap: Record<string, string> = {
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
};

function Card({ cardColor = "blue", type = "" }) {
  const colorClass = colorMap[cardColor] || "text-blue-500";
  const [questionVisibility, setQuestionVisibility] = useState(false)

  return (
    <div className="mx-auto max-w-2xl transition-all duration-200 ease-in-out bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 dark:bg-slate-800 dark:text-white dark:ring-white/10 dark:hover:bg-slate-700 dark:hover:shadow-md hover:shadow-md hover:bg-zinc-100 ">
      <div onClick={() => setQuestionVisibility(!questionVisibility)} className="flex flex-row flex-wrap items-start font-['Urbanist'] gap-5 bg-violet-900 p-6">
        {/* Icon */}
        <div className="shrink-0 bg-sky-200">
          <PollIcon colorClass={`${colorClass}`} type={`${type}`} />
        </div>

        {/* Content */}
        <div className="flex shrink-2 bg-amber-200 space-y-2 md:max-w-[60%] max-w-[70%]">
          <div className="min-w-0 w-full">
            <h2 className="font-['Lexend'] text-md font-semibold text-gray-900 dark:text-white">
              This is my poll
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-600">
              <strong>ID:</strong> 362161236123
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-600 truncate whitespace-nowrap overflow-hidden">
              <strong>Owner Username:</strong> ivan.parvanovski347@gmail.commmmmmmmmmmm
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex ml-auto items-end gap-2 bg-lime-200">
          <div className="flex text-amber-500 items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <p>EDIT</p>
          </div>
          <div className="flex text-rose-600 items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <p>DELETE</p>
          </div>
        </div>
      </div>
      {/* Question & Form */}
      <div className={`space-y-4 p-6 pt-2 font-['Lexend'] transition-opacity duration-300 ${questionVisibility ? "opacity-100" : "opacity-0"} bg-red-200`}>
        <p className="text-base font-medium font-['Lexend']">
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
            VOTE
          </button>
        </form>
      </div>
    </div>
  );
}

export { Card };
