export default function HowItWorkCard({ step }) {
  return (
    <article className="p-5 rounded-2xl shadow group hover:shadow-lg transition-all border border-neutral/5 bg-base-100 cursor-pointer">
      <step.icon className="size-8 text-secondary" />
      <h4 className="my-4 text-xl font-medium group-hover:text-primary transition-all">
        {step.title}
      </h4>
      <p className="text-neutral">{step.content}</p>
    </article>
  );
}
