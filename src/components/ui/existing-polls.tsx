import { Card } from "./card";
import { useState } from "react";

export function ExistingPolls() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <>
         <div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-4 font-['Lexend'] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>
              Existing Polls
            </h2>

            <div className="rounded-md overflow-hidden flex gap-2 pb-4">
              {["All", "Yours", "Votes"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 font-medium py-2 transition rounded-md 
                ${
                  activeTab === tab
                    ? "bg-rose-300 text-white"
                    : "bg-white text-gray-700 hover:bg-rose-100"
                }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className=" space-y-2 p-4 overflow-y-auto flex-1">
            <Card type="document" cardColor={"yellow"} />
            <Card type="bar" cardColor={"red"} />
            <Card type="zap" cardColor={"green"} />
            <Card type="question" cardColor={"blue"} />
            <Card type="zap" cardColor={"red"} />
            <Card type="document" cardColor={"green"} />
            <Card type="bar" cardColor={"blue"} />
            <Card type="question" cardColor={"yellow"} />
            <Card type="document" cardColor={"red"} />
          </div>
        </>
    );
}