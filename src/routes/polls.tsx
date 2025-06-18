import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import CreateForm from "@/components/ui/create-form";
import { Navbar } from "@/components/ui/navbar";
import { useState } from "react";

export const Route = createFileRoute("/polls")({
  component: PollsComponent,
});

function PollsComponent() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="h-screen flex flex-col font-['Urbanist']">
      <Navbar />

      <div className="bg-[var(--color-midnight)] flex flex-1 overflow-hidden">
        <div className="flex w-1/2 justify-center items-start p-8">
          <CreateForm />
        </div>
        <div className="w-1/2 rounded-tl-2xl bg-rose-50 flex flex-col px-8 pt-8">
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
            <Card cardColor={"yellow"} />
            <Card cardColor={"blue"} />
            <Card cardColor={"red"} />

            <Card cardColor={"yellow"} />
            <Card cardColor={"blue"} />
            <Card cardColor={"red"} />

            <Card cardColor={"yellow"} />
            <Card cardColor={"blue"} />
            <Card cardColor={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
}
