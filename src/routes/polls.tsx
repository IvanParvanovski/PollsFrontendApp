import { createFileRoute } from "@tanstack/react-router";
import CreateForm from "@/components/ui/create-form";
import { Navbar } from "@/components/ui/navbar";
import { ExistingPolls } from "@/components/ui/existing-polls";
import {useEffect, useRef} from "react";
import gsap from "gsap";

export const Route = createFileRoute("/polls")({
  component: PollsComponent,
});

function PollsComponent() {
    const sectionRef = useRef(null);

    useEffect(() => {
    requestAnimationFrame(() => {
        if (sectionRef.current) {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 4}
        );
        }
    });
    }, []);


  return (
    <div className="h-screen flex flex-col font-['Urbanist']">
      <Navbar />

      <div className="bg-[var(--color-midnight)] flex flex-col md:flex-1 md:overflow-hidden md:flex-row">
        <div className="flex w-full md:w-1/2 justify-center items-start p-8">
          <CreateForm />
        </div>
        <div 
          // ref={sectionRef}
          className="w-full pb-4 md:w-1/2 rounded-tl-2xl rounded-tr-2xl  md:rounded-tl-2xl bg-rose-50 flex flex-col px-6 md:px-8 pt-8">
          <ExistingPolls/>
        </div>
      </div>
    </div>
  );
}
