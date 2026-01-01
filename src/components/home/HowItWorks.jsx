import HowItWorkCard from "../card/HowItWorkCard";
import CommonTitle from "../CommonTitle";
import {
  LuClipboardCheck,
  LuClipboardList,
  LuHandCoins,
  LuUserCheck,
} from "react-icons/lu";
import Container from "../Container";

export default function HowItWorksComponent() {
  const howItWorksData = [
    {
      id: 1,
      title: "Sign Up",
      icon: LuUserCheck,
      content:
        "Create your account in just a few clicks and get instant access to our platform.",
    },
    {
      id: 2,
      title: "Browse Tasks",
      icon: LuClipboardList,
      content:
        "Explore a variety of tasks available and find the ones that suit you best.",
    },
    {
      id: 3,
      title: "Pick a Task",
      icon: LuClipboardCheck,
      content:
        "Select the task you want to complete and start working on it immediately.",
    },
    {
      id: 4,
      title: "Earn Real Money",
      icon: LuHandCoins,
      content:
        "Complete tasks successfully and earn real money directly to your account.",
    },
  ];

  return (
    <section className="pt-18">
      <CommonTitle
        title={"How It Works"}
        subtitle={
          "A simple, step-by-step guide to getting started and achieving results quickly."
        }
      />
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 max-sm:max-w-xs max-sm:mx-auto gap-6">
          {howItWorksData.map((step) => (
            <HowItWorkCard key={step.id} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
