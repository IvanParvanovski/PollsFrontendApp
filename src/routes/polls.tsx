import { createFileRoute } from "@tanstack/react-router";
import CreateForm from "@/components/ui/create-form";
import { Navbar } from "@/components/ui/navbar";
import { ExistingPolls } from "@/components/ui/existing-polls";

export const Route = createFileRoute("/polls")({
  component: PollsComponent,
});

function PollsComponent() {

  return (
    <div className="h-screen flex flex-col font-['Urbanist']">
      <Navbar />

      <div className="bg-[var(--color-midnight)] flex flex-1 overflow-hidden flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 justify-center items-start p-8">
          <CreateForm />
        </div>
        <div className="w-full md:w-1/2 rounded-tl-2xl rounded-tr-2xl  md:rounded-tl-2xl bg-rose-50 flex flex-col px-8 pt-8">
          <ExistingPolls/>
        </div>
      </div>
    </div>
  );
}
