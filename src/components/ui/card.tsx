import { useEffect, useRef, useState } from "react";
import PollIcon from "./poll-icon";
import gsap from "gsap";
import { fetchUserById } from "@/queries/auth/fetch-user";

type Answer = {
  id: string;
  description: string;
};

type Question = {
  id: string;
  description: string;
  type: string; // or a literal union like: 'single' | 'multiple'
  possibleAnswers: Answer[];
};

export type Poll = {
  id: string;
  userId: string;
  title: string;
  question: Question;
};

type CardProps = {
  poll: any; // or Record<string, any>
  cardColor?: string;
  type?: string;
};

const iconDetails = {
  color: {
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
  },
  type: [
    'zap',
    'document',
    'question',
    'bar'
  ]
}

function getRandomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function PollOwner({ userId }: {userId: string}) {
    const [username, setUsername] = useState<string>("");

    // Username
    useEffect(() => {
    async function loadUser() {
      try {
        const user = await fetchUserById(userId);
        setUsername(user.username);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUsername("Unknown");
      }
    }

    if (userId) {
      loadUser();
    }
  }, [userId]);

  return username
}

function Card({ poll }: CardProps) {
  const [questionVisibility, setQuestionVisibility] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const sectionRef = useRef(null);
  const [randomColorClass] = useState(() => getRandomFromArray(Object.values(iconDetails.color)));
  const [randomType] = useState(() => getRandomFromArray(iconDetails.type));

  // Question content visibility
  useEffect(() => {
    if (questionVisibility) {
      setShouldRender(true);
    }
  }, [questionVisibility]);
  
  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    if (questionVisibility) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: -30,
          scale: 0.95,
          filter: 'blur(2px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power1.inOut',
        }
      );
    } else if (shouldRender) {
      gsap.to(el, {
        opacity: 0,
        y: -20,
        scale: 0.97,
        filter: 'blur(2px)',
        duration: 0.4,
        ease: 'power1.inOut',
        onComplete: () => setShouldRender(false),
      });
    }
  }, [questionVisibility, shouldRender]);

  return (
    <div className="mx-auto max-w-2xl transition-all duration-200 ease-in-out bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 dark:bg-slate-800 dark:text-white dark:ring-white/10 dark:hover:bg-slate-700 dark:hover:shadow-md hover:shadow-md hover:bg-zinc-100 ">
      <div
        onClick={() => setQuestionVisibility(!questionVisibility)}
        className="flex flex-row flex-wrap items-start font-['Urbanist'] gap-5 p-6"
      >
        {/* Icon */}
        <div className="shrink-0">
          <PollIcon colorClass={`${randomColorClass}`} type={`${randomType}`} />
        </div>

        {/* Content */}
        <div className="flex shrink-2 space-y-2 md:max-w-[60%] max-w-[70%]">
          <div className="min-w-0 w-full">
            <h2 className="font-['Lexend'] text-md font-semibold text-gray-900 dark:text-white">
              {poll.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-600">
              <strong>ID:</strong> {poll.id}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-600 truncate whitespace-nowrap overflow-hidden">
              <strong>Owner Username:</strong>{" "}
              <PollOwner userId={poll.userId}/>
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex ml-auto items-end gap-2">
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
      {shouldRender && (
        <div
          ref={sectionRef}
          className={`space-y-4 p-8 pt-0 font-['Lexend'] transition-opacity duration-300`}
        >
          <p className="text-base font-medium font-['Lexend']">
            {poll.question.description}
          </p>
          <form action="#" method="post" className="space-y-3">
            <ul className="space-y-2">

              {poll.question.possibleAnswers.map((a: any) => (
                 <li className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="one"
                      name="first_item"
                      value="1"
                      className="h-4 w-4 text-rose-500"
                    />
                    <label htmlFor="one" className="text-sm">
                      {a.description}
                    </label>
                  </li>
              ))}
            </ul>

            <button
              type="submit"
              className="rounded-lg bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-800 transition"
            >
              VOTE
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export { Card };
