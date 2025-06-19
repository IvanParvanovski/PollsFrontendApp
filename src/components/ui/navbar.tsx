import { useEffect, useRef } from "react";
import { Logo } from "./logo";
import gsap from "gsap";

export function Navbar() {
  const authenticated = false;

  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.5, ease:'power1.inOut'}
        )
    };
  }, [])

  return (
    <div className="w-full font-['Lexend'] bg-gradient-to-t from-[var(--color-midnight)] to-rose-300  px-6 pt-4 pb-6 shadow-[0_20px_60px_rgba(255,255,255,0.4)]">
      <div ref={sectionRef} className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/polls" className="text-base font-medium text-white hover:underline cursor-pointer underline-offset-4">Home</a>
        </div>

        <Logo/>

        {/* Right Side (Auth Links) */}
        <ul className="flex items-center gap-6 text-sm text-white">
          {!authenticated ? (
            <>
              <li className="text-base underline-offset-4 font-medium text-white hover:underline cursor-pointer">
                <a href="/register">Register</a>
              </li>
              <li className="text-base underline-offset-4 font-medium text-white hover:underline cursor-pointer">
                <a href="/login">Login</a>
              </li>
            </>
          ) : (
            <>
              <li className="hover:underline cursor-pointer">Logout</li>
              <li className="font-medium">Welcome, Ganio</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
