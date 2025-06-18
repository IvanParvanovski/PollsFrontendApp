import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
return (
    <div className="relative flex h-full bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-12 left-12 size-12 rounded-xl p-2 border border-white/10 bg-white/10 text-rose-950 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
        />
      </svg>

      <div className="p-10 w-5/10 content-center pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">Log In</h2>
        <p className="mt-1 mb-8 text-sm/6 text-gray-600">
            Don't have an account? <span className="text-blue-500 underline font-bold">Register now</span>.
        </p>


        <form className="relative space-y-4">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm/6 mb-2 font-medium text-gray-900"
            >
              Username
            </label>
            <div className="relative">
              <input
                id="username"
                name="username"
                type="username"
                className="block w-full pl-10 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute top-1.5 left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-2 relative sm:col-span-4">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full pl-10 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 absolute top-1.5 left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </div>
          </div>

          <button className="absolute right-0 rounded-lg bg-violet-500 px-6 py-2 text-white font-semibold shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 transition">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="relative w-6/10">
        <div
          style={{
            clipPath: `
                polygon(
                    20% 0%,
                    100% 0%,
                    100% 90%,
                    90% 100%,
                    0% 100%,
                    0% 20%
                )
            `,
          }}
          className="absolute inset-0 z-10 pointer-events-none
               bg-gradient-to-br from-black/20 to-black/30"
        />
        <img
          className="h-full object-cover"
          style={{
            clipPath: `
                polygon(
                    20% 0%,
                    100% 0%,
                    100% 90%,
                    90% 100%,
                    0% 100%,
                    0% 20%
                )
            `,
          }}
          src="https://images.unsplash.com/photo-1428973085873-61a784626aad?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
