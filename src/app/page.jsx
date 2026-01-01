import FaqComponent from "@/components/home/Faq";
import HeroComponent from "@/components/home/Hero";
import HowItWorksComponent from "@/components/home/HowItWorks";
import SubscriptionPlansComponent from "@/components/home/SubscriptionPlans";
import TestimonialsComponent from "@/components/home/testimonials/Testimonials";
import TopWorkersComponent from "@/components/home/TopWorkers";

export default function HomePage() {
  return (
    <>
      <HeroComponent />
      <TopWorkersComponent />
      <TestimonialsComponent />
      <HowItWorksComponent />
      <SubscriptionPlansComponent />
      <FaqComponent />
    </>
  );
}
