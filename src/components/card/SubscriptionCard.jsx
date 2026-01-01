import { FaCheckCircle } from "react-icons/fa";

export default function SubscriptionCard({ plan }) {
  const { name, price, benefits } = plan;
  return (
    <article className="relative p-5 rounded-2xl shadow transition-all hover:shadow-lg border border-neutral/5 bg-base-200">
      {name.trim().toLowerCase() === "advanced" && (
        <span className="absolute bg-white shadow rounded-full px-4 py-2 top-2 right-2 badge text-primary font-bold">
          Popular
        </span>
      )}
      <h4 className="text-primary font-bold text-xl">{name}</h4>
      <h5
        className={`font-medium mt-3 mb-5 text-3xl ${
          price.toLowerCase() !== "free" && "text-secondary "
        }`}
      >
        {price}
      </h5>
      <ul className="border-t border-dashed border-t-primary/25 pt-6">
        {benefits.map((b, i) => (
          <li key={i} className="flex gap-2 items-center mb-2 last:mb-0">
            <FaCheckCircle className="text-primary" />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
