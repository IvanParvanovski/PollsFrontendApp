import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { createPoll } from "@/queries/polls/create-poll";

function useTypewriter(text: string, speed = 60, delay = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: any;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(typingInterval);
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(typingInterval);
    };
  }, [text, speed, delay]);

  return displayedText;
}

function CreateForm() {
  const formRef = useRef(null);

  const [toggleAdd, setToggleAdd] = useState(false);
  const [pollTitleInput, setPollTitle] = useState("");
  const [questionInput, setQuestion] = useState("");
  const questionType = "single";

  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([
    "Python",
    "C#",
    "Java",
    "C++",
  ]);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const response = createPoll(
      pollTitleInput,
      questionInput,
      answers,
      questionType
    );
    if (response == undefined) {
      alert("fail");
      return;
    }
    
    setPollTitle("");
    setQuestion("");
    setNewAnswer("");
    setAnswers([]);
    alert("success");
  }

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", delay: 3 }
      );
    }
  }, []);

  const formTitle = "Create a Poll";
  const descriptionText = "Fill out the form below to publish your new poll.";
  const typedTitle = useTypewriter(formTitle, 80, 50);
  const typedDescription = useTypewriter(descriptionText, 30, 1500);

  function handleToggleAdd() {
    setToggleAdd(!toggleAdd);
  }

  function removeItem(index: number) {
    setAnswers((prev) => prev.filter((_, i) => i !== index));
  }

  function handleAdd() {
    if (newAnswer.trim()) {
      setAnswers((prev) => [...prev, newAnswer.trim()]);
      setNewAnswer("");
    }
  }

  return (
    <div className="w-full max-w-2xl bg-[var(--color-midnight)] mx-auto p-6 space-y-6 rounded-2xl">
      {/* Heading */}
      <div className="">
        <h1 className="relative text-3xl font-['Lexend'] text-white font-bold dark:text-white tracking-tight mb-1">
          <span className="invisible">{formTitle}</span>
          <span className="absolute left-0 top-0">{typedTitle}</span>
        </h1>
        <p className="relative text-sm text-gray-400 dark:text-gray-400">
          <span className="invisible">{descriptionText}</span>
          <span className="absolute left-0 top-0">{typedDescription}</span>
        </p>
      </div>

      {/* Form Fields */}
      {/* <form ref={formRef} className="space-y-5"> */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Poll Title */}
        <div className="flex font-['Lexend'] flex-col">
          <label
            htmlFor="poll-title"
            className="mb-1 text-sm font-medium text-white dark:text-gray-300 "
          >
            Poll Title
          </label>
          <input
            id="poll-title"
            name="poll-title"
            type="text"
            value={pollTitleInput}
            onChange={(e) => setPollTitle(e.target.value)}
            placeholder="e.g. Favorite programming language?"
            className="border border-gray-300 font-['Urbanist'] text-gray-200 dark:border-slate-600 rounded-md px-3 py-2 text-sm bg-[var(--color-midnight-light)] dark:bg-slate-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500"
          />
        </div>

        {/* Question */}
        <div className="flex flex-col">
          <label
            htmlFor="question"
            className="mb-1 text-sm font-['Lexend'] font-medium text-white dark:text-gray-300"
          >
            Question
          </label>
          <input
            id="question"
            name="question"
            type="text"
            value={questionInput}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. What do you prefer?"
            className="border border-gray-300 text-gray-200 dark:border-slate-600 rounded-md px-3 py-2 text-sm bg-[var(--color-midnight-light)] dark:bg-slate-700 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500"
          />
        </div>

        {/* Answers Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium font-['Lexend'] text-white dark:text-gray-300">
              Answers
            </label>
            <button
              type="button"
              onClick={handleToggleAdd}
              className="flex items-center gap-1 text-sm font-medium text-lime-600 hover:underline"
            >
              {toggleAdd ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5"
                    />
                  </svg>
                  Close
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 9v6m3-3H9"
                    />
                  </svg>
                  Add Answer
                </>
              )}
            </button>
          </div>

          <ul className="space-y-2">
            {toggleAdd && (
              <li>
                <input
                  type="text"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAdd();
                    }
                  }}
                  placeholder="Type an answer..."
                  className="w-full border-0 border-b pl-2 border-gray-300 bg-[var(--color-midnight-light)] text-sm px-0 py-1 text-gray-200 placeholder-gray-200 focus:border-lime-500 focus:outline-none"
                />
              </li>
            )}

            {answers.map((answer, index) => (
              <li
                key={index}
                className="text-md text-lime-600 flex justify-between dark:text-gray-200 pl-4"
              >
                <div className="flex items-center gap-2">
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
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  {answer}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => removeItem(index)}
                  className="size-6 text-rose-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        <button className="rounded-lg bg-rose-300 px-6 py-2 text-white font-semibold shadow hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 transition">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
