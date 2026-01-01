import SubscriptionCard from "../card/SubscriptionCard";
import CommonTitle from "../CommonTitle";
import Container from "../Container";

export default function SubscriptionPlansComponent() {
  const subscriptionPlans = [
    {
      id: 1,
      name: "Starter",
      price: "Free",
      benefits: [
        "3 regular tasks daily",
        "Monthly limit: 90 tasks",
        "Access to basic tasks",
        "Standard support",
        "Track your earnings",
      ],
    },
    {
      id: 2,
      name: "Advanced",
      price: "$9.99/mo",
      benefits: [
        "6 regular tasks daily",
        "2 special tasks daily",
        "Monthly limit: 180 regular tasks",
        "Monthly limit: 24 special tasks",
        "Access to regular & special tasks",
        "Priority support",
        "Detailed analytics dashboard",
      ],
    },
    {
      id: 3,
      name: "Master",
      price: "$19.99/mo",
      benefits: [
        "10 regular tasks daily",
        "4 special tasks daily",
        "Monthly limit: 300 regular tasks",
        "Monthly limit: 48 special tasks",
        "All tasks unlocked",
        "Premium support",
        "Advanced performance tracking",
      ],
    },
  ];
  return (
    <section className="pt-24">
      <CommonTitle
        title={"Our monthly plans"}
        subtitle={"See our subscription plans and benefits at a glance."}
      />
      <Container>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
