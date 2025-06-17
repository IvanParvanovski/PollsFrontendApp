import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/polls")({
  component: PollsComponent,
});

function PollsComponent() {
  return (
    <>
      <div className="space-y-2">
        <Card cardColor={"yellow"}/>
        <Card cardColor={"blue"}/>
        <Card cardColor={"red"}/>
      </div>

    </>
  )
  
}
