import { useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import gsap from "gsap";
import { authStatus } from "@/queries/auth/auth-status";
import { logout } from "@/queries/auth/logout";

export function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  function handleLogout() {
    const res = logout()
    res.then(() => { window.location.reload() })
  }

  const sectionRef = useRef(null);
  // const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    authStatus().then((data) => {
      setAuthenticated(data.authenticated);
      setUsername(data.username || '');
    });
  }, [window.location.pathname]);

  // Animation
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
      <div 
        // ref={sectionRef} 
        className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/polls" className="text-base font-medium text-white hover:underline cursor-pointer underline-offset-4">Home</a>
        </div>

        <Logo/>

        {/* Right Side (Auth Links) */}
        <ul className="flex items-center gap-6 text-sm text-white">
          {!authenticated ? (
            <>
              <li className="text-base font-medium text-white hover:underline cursor-pointer underline-offset-4">
                <a href="/register">Register</a>
              </li>
              <li className="text-base font-medium text-white hover:underline cursor-pointer underline-offset-4">
                <a href="/login">Login</a>
              </li>
            </>
          ) : (
            <>
              <li className="text-base font-medium text-white hover:underline cursor-pointer underline-offset-4" onClick={handleLogout}>Logout</li>
              <li className="text-base font-medium text-white">
                {username}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
